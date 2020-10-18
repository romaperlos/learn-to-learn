import express from 'express';
import Content from '../models/Content.js';

const router = express.Router();

router.get('/', async (req, res) => {
  let content;
  try {
    content = await Content.find();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
  return res.status(200).json({ content });
});

router.post('/', async (req, res) => {
  const {
    title, description, item, directory,
  } = req.body;
  const content = new Content({
    title, description, item, directory,
  });
  try {
    await content.save();
    return res.status(200).json(content);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
});

export default router;
