import Member from '../models/members';

export const get_members = async (organization) => {
  const query = Member.find({organization});
  return await query.exec();
};
