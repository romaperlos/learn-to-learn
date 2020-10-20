import express from 'express';
import can from 'canvas';
import FastAverageColor from 'fast-average-color';
import Company from '../models/Company.js';

const { loadImage, createCanvas } = can;

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

    // console.log(`Filename: ${filename}, size: ${width}×${height}`);
    // console.log('// [red, green, blue, opacity]');
    // console.log('Simple average color: ', fac.getColorFromArray4(imageData.data, { algorithm: 'simple' }));
    // console.log('Sqrt average color: ', fac.getColorFromArray4(imageData.data));
    // console.log('Dominant average color: ', fac.getColorFromArray4(imageData.data, { algorithm: 'dominant' }));
    return fac.getColorFromArray4(imageData.data, { algorithm: 'dominant' });
  }

  let resColor = `rgba(${await printAverageColor(`${logoUrl}`)})`;
  console.log(resColor);

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

export default router;
