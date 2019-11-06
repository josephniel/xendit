import mongoose from 'mongoose';
import { connection } from './db';

const Comment = connection.model('comments', new mongoose.Schema({
  organization: String,
  comment: String,
  isDeleted: Boolean,
  ctime: Date
}));

export const get_comments = async (organization) => {
  const query = Comment.find({organization, isDeleted: false});
  return await query.exec();
};

export const set_comment = async (organization, comment) => {
  await Comment.insertMany([
    {
      organization,
      comment,
      isDeleted: false,
      ctime: new Date()
    }
  ]);
};

export const delete_comments = async (organization) => {
  await Comment.updateMany({ organization }, { isDeleted: true });
}
