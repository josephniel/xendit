import mongoose from 'mongoose';
import { connection } from './db';

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

export default connection.model('members', memberSchema);
