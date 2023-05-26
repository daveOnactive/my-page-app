import express from 'express';
import { connectRoutes} from './routes/connectRoutes';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import { errorHandler } from './middlewares';
import { PORT } from './utils/constants';

dotEnv.config();
export const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

connectRoutes();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.use(errorHandler);