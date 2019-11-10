import membersService from '../services/members';

export default {
  get: async (req, res) => {
    const organization = req.params.name;
    res.status(200).send({
      members: await membersService.getMembers(organization),
    });
  },
};
