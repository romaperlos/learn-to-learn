import express from 'express';
import multer from 'multer';
import can from 'canvas';
import FastAverageColor from 'fast-average-color';
import { v4 as uuidv4 } from 'uuid';
// import storage from '../middleware/upload.js';
import Company from '../models/Company.js';

const { loadImage, createCanvas } = can;

// const upload = multer({ storage }).single('file');

const router = express.Router();

router.get('/', async (req, res) => {
  let company;
  try {
    company = await Company.find();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
  return res.status(200).json({ company });
});

router.post('/', async (req, res) => {
  const {
    companyName, description, logoUrl,
  } = req.body;

  // Получение цвета
  const fac = new FastAverageColor();

  async function printAverageColor(filename) {
    const img = await loadImage(filename);
    const { width, height } = img;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, width, height);
    return fac.getColorFromArray4(imageData.data, { algorithm: 'dominant' });
  }

  const responseColor = await printAverageColor(`${logoUrl}`);
  const resColor = `rgba(${responseColor})`;

  const company = await new Company({
    companyName, description, logoUrl, mainColor: resColor,
  });
  try {
    await company.save();
    return res.status(200).json(company);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => { cb(null, 'public') },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// });

// router.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       return res.status(500).json(err);
//     } if (err) {
//       return res.status(500).json(err);
//     }
//     return res.status(200).send(req.file);
//   });
// });
const multerStorage = multer.diskStorage({
  destination(req, file, callback) {
    console.log('>>>>>>>>> Destination');
    callback(null, '../public/');
  },
  filename(req, file, callback) {
    console.log('>>>>>>>>> Filename');
    const fileExtension = file.fieldname.match(/\.[^.\\/:*?"<>|\r\n]+$/m)[0];
    console.log(fileExtension);
    const fileName = 'ABCACBACB;
    callback(null, fileName);
  },
});

const upload = multer({ storage: multerStorage });

// app.get('/upload', (req, res) => {
//   res.render('index');
// });

router.post('/upload', upload.any(), (req, res) => {
  console.log('>>>>>>>>> Post');
  res.json({ responseText: 'Response from file upload!' });
});

export default router;
