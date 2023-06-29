require('dotenv').config();

import express from 'express';
import { connectRoutes} from './routes/connect-routes';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares';
import { ENDPOINT_ENTRY } from './utils/constants';

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectRoutes(ENDPOINT_ENTRY);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});