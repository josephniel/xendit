import express from 'express';
import controllers from './router';
import { HOST, PORT } from './constants';

const app = express();

controllers.map(controller => {
  app[controller.method](controller.route, controller.method_func);
})

app.listen(PORT, HOST);
