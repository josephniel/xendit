import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    default: '',
  },
  followerCount: {
    type: Number,
    default: 0,
  },
  ctime: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('members', memberSchema);
