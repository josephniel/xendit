import comments from './controllers/comments';
import members from './controllers/members';
import ping from './controllers/ping';

const methods = Object.freeze({
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
});

export default [
  {
    method: methods.GET,
    route: '/ping',
    method_func: ping,
  },
  {
    method: methods.GET,
    route: '/org/:name/comments',
    method_func: comments.get,
  },
  {
    method: methods.POST,
    route: '/org/:name/comments',
    method_func: comments.post,
  },
  {
    method: methods.DELETE,
    route: '/org/:name/comments',
    method_func: comments.delete,
  },
  {
    method: methods.GET,
    route: '/org/:name/members',
    method_func: members.get,
  },
];
