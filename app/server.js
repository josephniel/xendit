import express from 'express';
import mongoose from 'mongoose';

import controllers from './router';
import { MONGODB_URI } from './constants';

const app = express();

mongoose.connect(MONGODB_URI, (err) => { if (err) throw err; });

app.use(express.json());

controllers.map(controller => {
  app[controller.method](controller.route, controller.method_func);
})

export default app;
