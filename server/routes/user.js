import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import mailer from '../middleware/nodemailer.js';

const router = express.Router();


// const saltRounds = 10;

router.get('/', (req, res) => {
  res.end();
});

router
  .route('/signup')
  .get((req, res) => {
    res.end();
  })
  .post(async (req, res) => {
    const {
      name,
      lastname,
      email,
    } = req.body;
    // Проверка уникальности name и email вручную
    try {
      // const errUnqUser = await User.isUserUnique(name);
      const errUnqEmail = await User.isEmailUnique(email);
      if (errUnqEmail) {
        return res.status(401).json({ message: errUnqEmail });
      }

      function generatePassword() {
        let length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
      const password = generatePassword()

      const hashedPassword = await bcrypt.hash(password, Number(process.env.ROUNDS) ?? 10);

      const user = await new User({
        name,
        lastname,
        email,
        password: hashedPassword,
      }).save();
      const message = {
        from: 'Mailer Test <learntolearn@mail.ru>',
        to: email,
        subject: "Регистрация",
        text: `
        Поздравляем, Вы успешно зарегистрированы!
        
          Данные вашей учетной записи:
          
              Name:   ${name}
              Lastname:   ${lastname}
              Email:   ${email}
              Password:   ${password}
          


        Данное письмо не требует ответа.`
      }
      mailer(message)
      res.status(200)
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error.message });
    }

  });

router
  .route('/login')
  .get((req, res) => {
    if (req.session.user) res.end();
    res.end();
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        req.session.user = user;
        req.session.user.password = undefined;
        res.json({
          user: {
            _id: req.session.user._id,
            username: req.session.user.username,
          },
        });
      } else if (!user) {
        res.status(401).json({ message: 'Введенный e-mail не зарегистрирован' });
      } else {
        res.status(401).json({ message: 'Введенный пароль не совпадает' });
      }
    } catch (error) {
      console.log(error.message);
      res.status(401).json({ message: error.message });
    }
  });

router.get('/logout', async (req, res) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
    } catch (error) {
      console.log(error.message);
      res.status(401).json({ message: error.message });
    }
    res.clearCookie('user_sid');
  }
  res.end();
});

router.get('/checkSession', (req, res) => {
  if (req.session.user) {
    return res.json({
      user: {
        _id: req.session.user._id,
        username: req.session.user.username,
      },
    });
  }
  res.status(401).end();
});



export default router;
