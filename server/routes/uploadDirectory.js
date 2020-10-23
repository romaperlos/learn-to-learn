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
    callback(null, file.originalname.replace(/(\.[^.]+)$/, `_${uuidv4()}$1`));
  },
});

const upload = multer({ storage: multerStorage });

router.post('/', (req, res, next) => {
  next();
}, upload.single('file'), (req, res) => {
  const reqBody = { ...req.body };
  const { directoryId } = reqBody;
  const way = req.file.path;
  const { filename } = req.file;

  res.json({ responseText: 'Response from file upload!' });
});

export default router;
