import comments_service from '../services/comments';

export default {
  get: async (req, res) => {
    const organization = req.params.name;
    const comments = await comments_service.get_comments(organization);
    res.status(200).send({ comments });
  },
  post: async (req, res) => {
    const organization = req.params.name;
    const comment = await comments_service.set_comment(
      organization,
      req.body.comment,
    );
    res.status(201).send(comment);
  },
  delete: async (req, res) => {
    const organization = req.params.name;
    await comments_service.delete_comments(organization);
    res.status(200).send();
  }
};
