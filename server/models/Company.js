import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
  },
  description: {
    type: String,
  },
  logoUrl: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  mainColor: {
    type: String,
    default: '#3f51b5',
  },
  secondColor: {
    type: String,
    default: '#f44336',
  },
  whiteFont: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Company', companySchema);
