import express from 'express';
import Directory from '../models/Directory.js';

const router = express.Router();

router.get('/directory', async (req, res) => {
  let directory;
  try {
    directory = await Directory.find();
    console.log(directory);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
  return res.status(200).json({ directory });
});

export default router;
