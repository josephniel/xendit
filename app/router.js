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
  }
];
