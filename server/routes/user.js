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
    const { email } = req.body;
    // Проверка уникальности name и email вручную
    try {
      // const errUnqUser = await User.isUserUnique(name);
      const errUnqEmail = await User.isEmailUnique(email);
      if (errUnqEmail) {
        return res.status(401).json({ message: errUnqEmail });
      } else {
        let user = await new User({
          email: email,
        }).save();
        res.redirect('/signup');
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error.message });
    }

    // name и email вручную
    try {
      await new User({
        name,
        lastname,
        email,
        password,
      }).save();
      return res.status(200).end();
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

// router
//   .route('/signup')
//   .get((req, res) => {
//     res.end();
//   })
//   .post(async (req, res) => {
//     const {
//       name, lastname, email, password,
//     } = req.body;
//     // Проверка уникальности name и email вручную
//     try {
//       // const errUnqUser = await User.isUserUnique(name);
//       const errUnqEmail = await User.isEmailUnique(email);
//       if (errUnqEmail) {
//         return res.status(401).json({ message: errUnqEmail });
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(401).json({ message: error.message });
//     }
