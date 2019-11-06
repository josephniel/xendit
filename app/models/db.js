import mongoose from 'mongoose';
import { MONGODB_URI } from '../constants';

export const connection = mongoose.createConnection(MONGODB_URI);
