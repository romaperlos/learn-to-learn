import express from 'express';
import Content from '../models/Content.js';
import Directory from '../models/Directory.js';

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
  console.log('<<<<<');
  console.log(req.body);
  const {
    title, description, item, directory,
  } = req.body;
  console.log(title, description, item);
  const content = new Content({
    title, description, item, directory,
  });
  console.log(content, ' CONTENT!');
  try {
    const currentDir = await Directory.findById(directory);
    currentDir.content.push(content);
    currentDir.lastDir = true;
    await content.save();
    await currentDir.save();
    return res.status(200).json(content);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id, ' <<<< ID');
  try {
    const content = await Content.find({ directory: id }).populate('directory');
    return res.status(200).json(content);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Content.findByIdAndDelete(id);
    const content = await Content.find();
    return res.status(200).json({ content });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
});

export default router;
