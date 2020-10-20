import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  item: {
    type: Array,
  },
  directory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Directory',
  },
});

export default mongoose.model('Content', contentSchema);
