import { get_members } from '../services/members';

export default {
  get: async (req, res) => {
    const organization = req.params.name;
    const members = await get_members(organization);
    res.send({ members }).status(200);
  },
};
