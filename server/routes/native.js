import express from 'express';
import Directory from '../models/Directory.js';
import Content from '../models/Content.js';

const router = express.Router();

router.get('/directory', async (req, res) => {
  let directory;
  try {
    directory = await Directory.find();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  return res.status(200).json({ directory });
});

router.get('/content', async (req, res) => {
  let content;
  try {
    content = await Content.find();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
  return res.status(200).json({ content });
});


export default router;
