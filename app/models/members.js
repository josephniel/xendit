import mongoose from 'mongoose';
import { connection } from './db';

const Member = connection.model('members', new mongoose.Schema({
  organization: String,
  name: String,
  avatarUrl: String,
  followerCount: Number,
  ctime: Date
}));

export const get_members = async (organization) => {
  const query = Member.find({organization});
  return await query.exec();
};
