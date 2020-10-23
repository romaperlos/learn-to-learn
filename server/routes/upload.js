import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const multerStorage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './uploadFiles');
  },
  filename(req, file, callback) {
    const fileExtension = file.fieldname.match(/\.[^.\\/:*?"<>|\r\n]+$/m)[0];
    console.log(fileExtension);
    const fileName = `${file.fieldname.slice(0, -fileExtension.length)}_${uuidv4()}${fileExtension}`;
    callback(null, fileName);
  },
});

const upload = multer({ storage: multerStorage });

router.post('/', upload.any(), (req, res) => {
  res.json({ responseText: 'Response from file upload!' });
});

export default router;
