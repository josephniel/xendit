import express from 'express';
import constants from './constants';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(constants.PORT, constants.HOST);
