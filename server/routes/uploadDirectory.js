import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const router = express.Router();

const multerStorage = multer.diskStorage({
  destination(req, file, callback) {
    console.log(process.cwd(), '<<<<<<<<');
    callback(null, './uploadFiles/directory');
  },
  filename(req, file, callback) {
    console.log(file);
    // const fileExtension = file.originalname.match(/\.[^.]+$/m)[0];
    // console.log(fileExtension);
    // const fileName = `${file.fieldname.slice(0, -fileExtension.length)}_${uuidv4()}${fileExtension}`;
    callback(null, file.originalname.replace(/(\.[^.]+)$/, '_' + uuidv4() + '$1'));
  },
});

const upload = multer({ storage: multerStorage });


router.post('/', (req, res, next) => {
  console.log('>>>>>>>>>>>>>>>>>', req.body);
  next();
}, upload.single('file'), (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>', req.file);
  res.json({ responseText: 'Response from file upload!' });
});

export default router;
