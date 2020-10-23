import express from 'express';
import can from 'canvas';
import FastAverageColor from 'fast-average-color';
import Company from '../models/Company.js';

const { loadImage, createCanvas } = can;

const router = express.Router();
// const companyId = '5f8f1aeb5df87f9d9e11930b';

router.get('/', async (req, res) => {
  const companyId = req.session.company;
  let company;

  try {
    company = await Company.findOne({ _id: companyId });
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

router.route('/registration')
  .get((req, res) => {
    res.end();
  })
  .post(async (req, res) => {
    const {
      companyName, description, logoUrl,
    } = req.body;
    // Проверка уникальности по companyName
    try {
      const errUnqCompanyName = await Company.isUserUnique(companyName);
      if (errUnqCompanyName) {
        return res.status(401).json({ message: errUnqCompanyName });
      }

      try {
        await new Company({
          companyName,
          description,
          logoUrl,
        }).save();
        return res.status(200).end();
      } catch (error) {
        console.log(error);
        res.status(401).json({ message: error.message });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error.message });
    }
  });

export default router;
