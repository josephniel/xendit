import Comment from '../models/comments';

const getComments = async (organization) => {
  const query = Comment.find({organization, isDeleted: false});
  return await query.exec();
};

const setComment = async (organization, comment) => {
  return await Comment.create({ organization, comment });
};

const deleteComments = async (organization) => {
  await Comment.updateMany({ organization }, { isDeleted: true });
};

export default {
  getComments,
  setComment,
  deleteComments,
};
