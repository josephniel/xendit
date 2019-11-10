import members_service from '../services/members';

export default {
  get: async (req, res) => {
    const organization = req.params.name;
    res.status(200).send({
      members: await members_service.get_members(organization),
    });
  },
};
