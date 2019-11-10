import request from 'supertest';
import app from '../server';
import members_service from '../services/members';

describe('Members API', () => {
  it('should return list of members on GET request', async () => {
    const spy = jest.spyOn(members_service, 'get_members');
    spy.mockReturnValue([{key: 'value'}]);

    const res = await request(app).get('/org/xendit/members');
    expect(spy).toHaveBeenCalledWith('xendit');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({members: [{key: 'value'}]});
  });
});
