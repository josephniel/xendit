import Member from '../models/members';
import membersService from './members';

describe('Members service', () => {
  it('should return list of members on getMembers', async () => {
    const spy = jest.spyOn(Member, 'find');
    const members = [{key: 'value'}];
    spy.mockReturnValue({exec: async () => members});

    const actual = await membersService.getMembers('xendit');
    expect(spy).toHaveBeenCalledWith({organization: 'xendit'});
    expect(actual).toEqual(members);
  });
});
