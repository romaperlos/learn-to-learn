import mongoose from 'mongoose';

const directorySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Directory',
    default: null,
  },
  content: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content',
  }],
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
});
export default mongoose.model('Directory', directorySchema);
