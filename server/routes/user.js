import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const router = express.Router();

const saltRounds = 10;

router.get('/', (req, res) => {
  res.end();
});

router
  .route('/signup')
  .get((req, res) => {
    res.end();
  })
  .post(async (req, res) => {
    const { username, email, password } = req.body;
    // Проверка уникальности username и email вручную
    try {
      const errUnqUser = await User.isUserUnique(username);
      const errUnqEmail = await User.isEmailUnique(email);
      if (errUnqUser || errUnqEmail) {
        return res.status(401).json({ message: errUnqUser || errUnqEmail });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error.message });
    }

    // username и email вручную
    try {
      await new User({
        username,
        email,
        password: await bcrypt.hash(password, saltRounds),
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
