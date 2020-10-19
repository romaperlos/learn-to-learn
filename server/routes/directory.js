import express from 'express';
import Directory from '../models/Directory.js';

const router = express.Router();

router.get('/', async (req, res) => {
  let directory;
  try {
    directory = await Directory.find();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
  return res.status(200).json({ directory });
});

router.post('/', async (req, res) => {
  const {
    title, description,
  } = req.body;
  const directory = new Directory({
    title, description,
  });
  try {
    await directory.save();
    return res.status(200).json(directory);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
});

router.patch('/', async (req, res) => {
  const { id, title, description } = req.body;
  const item = await Directory.findById(id);
  item.title = title;
  item.description = description;
  await item.save();
  console.log(req.body);
  res.status(200).end();
});

export default router;
