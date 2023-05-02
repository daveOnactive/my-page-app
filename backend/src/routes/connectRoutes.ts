import { Request, Response } from 'express';
import { app } from '../index';
import { publishApi } from '../api';


export const connectRoutes = () => {
  app.use('/app/publish', publishApi);

  app.use('/', (req: Request, res: Response) => {
    res.send('Welcome to MY PAGE 1.0');
  });
};