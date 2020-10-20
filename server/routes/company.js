import express from 'express';
import can from 'canvas';
import FastAverageColor from 'fast-average-color';
import Company from '../models/Company.js'

const { loadImage, createCanvas } = can;

const router = express.Router();

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
}

printAverageColor('https://vk.vkfaces.com/858236/v858236396/30086/KoILHha5HCU.jpg');

router.get('/', async (req, res) => {
  let company;
  try {
    company = await Company.find();
    console.log(directory);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
  return res.status(200).json({ company });
});

router.post('/', async (req, res) => {
  const {
    title, description, parent,
  } = req.body;
  const company = new Company({
    title, description, parent: parentId,
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
