import Comment from '../models/comments';

export const get_comments = async (organization) => {
  const query = Comment.find({organization, isDeleted: false});
  return await query.exec();
};

export const set_comment = async (organization, comment) => {
  await Comment.insertMany([{ organization, comment }]);
};

export const delete_comments = async (organization) => {
  await Comment.updateMany({ organization }, { isDeleted: true });
};
