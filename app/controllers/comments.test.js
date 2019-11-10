import request from 'supertest';
import app from '../server';
import commentsService from '../services/comments';

describe('Comments API', () => {
  it('should return list of comments on GET request', async () => {
    const spy = jest.spyOn(commentsService, 'getComments');
    spy.mockReturnValue([{key: 'value'}]);

    const res = await request(app).get('/org/xendit/comments');
    expect(spy).toHaveBeenCalledWith('xendit');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({comments: [{key: 'value'}]});
  });

  it('should return created comment upon POST request', async () => {
    const spy = jest.spyOn(commentsService, 'setComment');
    spy.mockReturnValue({key: 'value'});

    const res = await request(app).post('/org/xendit/comments').send({
      comment: 'This is a mock comment',
    });
    expect(spy).toHaveBeenCalledWith('xendit', 'This is a mock comment');
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({key: 'value'});
  });

  it('should return successful status on DELETE request', async () => {
    const spy = jest.spyOn(commentsService, 'deleteComments');

    const res = await request(app).delete('/org/xendit/comments');
    expect(spy).toHaveBeenCalledWith('xendit');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({});
  });
});
