import express, { Request, Response } from 'express';
import { connectRoutes} from './routes/connectRoutes';
import bodyParser from 'body-parser';

export const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

connectRoutes();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use((err: any, req: Request, res: Response) => {
  // console.error(err.stack);
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ message });
});