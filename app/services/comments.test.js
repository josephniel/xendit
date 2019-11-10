import Comment from '../models/comments';
import commentsService from './comments';

describe('Comments service', () => {
  it('should return list of comments on getComments', async () => {
    const spy = jest.spyOn(Comment, 'find');
    const comments = [{key: 'value'}];
    spy.mockReturnValue({exec: async () => comments});

    const actual = await commentsService.getComments('xendit');
    expect(spy).toHaveBeenCalledWith({
      organization: 'xendit',
      isDeleted: false,
    });
    expect(actual).toEqual(comments);
  });

  it('should return created comment on setComment', async () => {
    const spy = jest.spyOn(Comment, 'create');
    const comment = {key: 'value'};
    spy.mockReturnValue(comment);

    const actual = await commentsService.setComment('xendit', 'mock comment');
    expect(spy).toHaveBeenCalledWith({
      organization: 'xendit',
      comment: 'mock comment',
    });
    expect(actual).toEqual(comment);
  });

  it('should soft delete comments on deleteComments', async () => {
    const spy = jest.spyOn(Comment, 'updateMany');
    spy.mockImplementation(jest.fn());

    await commentsService.deleteComments('xendit');
    const filters = { organization: 'xendit' };
    const updateValues = { isDeleted: true };
    expect(spy).toHaveBeenCalledWith(filters, updateValues);
  });
});
