import express from 'express';
import mongoose from 'mongoose';

import controllers from './router';
import { HOST, PORT, MONGODB_URI } from './constants';

export const app = express();

mongoose.connect(MONGODB_URI, (err) => { if (err) throw err; });

app.use(express.json());

controllers.map(controller => {
  app[controller.method](controller.route, controller.method_func);
})

app.listen(PORT, HOST);
