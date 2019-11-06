import { get_comments, set_comment, delete_comments } from '../services/comments';

export default {
  get: async (req, res) => {
    const organization = req.params.name;
    const comments = await get_comments(organization);
    res.send({ comments }).status(200);
  },
  post: async (req, res) => {
    const organization = req.params.name;
    const comment = await set_comment(organization, req.body.comment);
    res.send(comment).status(201);
  },
  delete: async (req, res) => {
    const organization = req.params.name;
    await delete_comments(organization);
    res.send().status(200);
  }
};
