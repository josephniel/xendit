import commentsService from '../services/comments';

export default {
  get: async (req, res) => {
    const organization = req.params.name;
    const comments = await commentsService.getComments(organization);
    res.status(200).send({ comments });
  },
  post: async (req, res) => {
    const organization = req.params.name;
    const comment = await commentsService.setComment(
      organization,
      req.body.comment,
    );
    res.status(201).send(comment);
  },
  delete: async (req, res) => {
    const organization = req.params.name;
    await commentsService.deleteComments(organization);
    res.status(200).send();
  }
};
