import express from 'express';
// import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
// import useMiddleware from './middleware/index.js';
// import errorHandlers from './middleware/error-handlers.js';
// import userRouter from './routes/user.js';
// import directoryRouter from './routes/directory.js';
// import contentRouter from './routes/content.js';
// import nativeRouter from './routes/native.js';
// import companyRouter from './routes/company.js';

const app = express();

const multerStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(process.env.PWD, 'uploadFiles'));
  },
  filename: function (req, file, callback) {
    const fileExtension = file.fieldname.match(/\.[^.\\/:*?"<>|\r\n]+$/m)[0];
    console.log(fileExtension);
    const fileName = file.fieldname.slice(0, -fileExtension.length) + '_' + uuidv4() + fileExtension;
    callback(null, 'ABCABCABC')
  }
})

const upload = multer({ storage: multerStorage });

// app.use(cors());
// useMiddletware(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('../public'));

// // Подключаем импортированные маршруты с определенным url префиксом.
// app.use('/directory', directoryRouter);
// app.use('/content', contentRouter);
// app.use('/user', userRouter);
// app.use('/native', nativeRouter);
// app.use('/company', companyRouter);

app.post('/upload', upload.any(), (req, res) => {
  res.json({ responseText: 'Response from file upload!' });
});

// Обработка несуществующих запросов
// errorHandlers(app);

export default app;
