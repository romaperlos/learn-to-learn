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
  mainColor: String,
  mainFontColor: String,
});

export default mongoose.model('Company', companySchema);
