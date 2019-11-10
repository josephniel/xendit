import Member from '../models/members';

const get_members = async (organization) => {
  const query = Member.find({organization});
  return await query.exec();
};

export default {
  get_members,
};
