import { Request, Response } from 'express';
import { app } from '../index';
import { publishApi } from '../api';


export const connectRoutes = () => {
  app.use('/app/publish', publishApi);

  app.use('/', (_req: Request, res: Response) => {
    res.send('Welcome to MY PAGE 1.0');
  });

  app.use('*', (_req: Request, res: Response) => {
    res.status(404).send('Not found');
  });
};