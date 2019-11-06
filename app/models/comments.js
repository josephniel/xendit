import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  ctime: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('comments', commentSchema);
