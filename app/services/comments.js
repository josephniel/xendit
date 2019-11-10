import Comment from '../models/comments';

const get_comments = async (organization) => {
  const query = Comment.find({organization, isDeleted: false});
  return await query.exec();
};

const set_comment = async (organization, comment) => {
  await Comment.insertMany([{ organization, comment }]);
};

const delete_comments = async (organization) => {
  await Comment.updateMany({ organization }, { isDeleted: true });
};

export default {
  get_comments,
  set_comment,
  delete_comments,
};
