import Member from '../models/members';

const getMembers = async (organization) => {
  const query = Member.find({organization});
  return await query.exec();
};

export default {
  getMembers,
};
