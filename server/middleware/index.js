import express from 'express';
import morgan from 'morgan';
import './db-connect';
import session from 'express-session';
import sessionFileStore from 'session-file-store';

const FileStore = sessionFileStore(session);

export default function (app) {

  app.use(morgan('dev'));

  // Body POST запросов.
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());


  // initialize express-session to allow us track the logged-in user across sessions.
  app.use(
    session({
      store: new FileStore(),
      key: 'user_sid',
      secret: 'anything here',
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 6000000,
      },
    }),
  );

  app.use((req, res, next) => {

    if (req.session.user) {
      res.locals.userName = req.session.user.username;
    }
    next();
  });

}
