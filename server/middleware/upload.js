// import multer from 'multer';
// import FTPStorage from 'multer-ftp';
// import FTP from 'ftp';

// const upload = multer({
//   storage: new FTPStorage({
//     basepath: '/', // базовый путь для загрузки файлов на сервер
//     ftp: {
//       host: 'ftpupload.net',
//       secure: true, // enables FTPS/FTP with TLS
//       user: 'onavt_27010748',
//       password: 'Elbrus2020',
//     }, // FTP connection options, see `ftp` node module for more
//     connection: new FTP(), // передать существующий экземпляр пункта
//     destination(req, file, options, callback) {
//       callback(null, 'testfilename'); // пользовательское место назначения файла, расширение файла добавляется в конец пути
//     },
//     transformFile(req, file, callback) {
//       // преобразовываем файл перед его загрузкой
//       // file.stream - это ReadableStream файла
//       // обратного вызова (ошибка, <ReadableStream | Buffer | String>)
//       callback(null, file.stream);
//     },
//   }),
// });

// router.post('/upload', upload.single('avatar'), (req, res, next) => {
//   req.file;
//   res.status(200);
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   // upload(req, res, (err) => {
//   //   if (err instanceof multer.MulterError) {
//   //     console.log('При загрузке произошла ошибка Multer.');
//   //     // A Multer error occurred when uploading.
//   //   } else if (err) {
//   //     console.log('При загрузке произошла неизвестная ошибка.');
//   //     // An unknown error occurred when uploading.
//   //   }
//   //   console.log('Все прошло нормально.');
//   //   // Everything went fine.
//   // });
// });

// export default upload;

// import express from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, 'public'); },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export default storage;
