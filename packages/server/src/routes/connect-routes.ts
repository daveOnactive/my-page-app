import { Request, Response } from 'express';
import { app } from '../index';
import { publishApi, projectApi, domainApi, authenticationApi } from '../api';
import { isAuthenticated } from '../middlewares';


export const connectRoutes = (endpointEntry: string) => {
  app.use('/auth', authenticationApi);
   
  app.use(`${endpointEntry}/domain`, isAuthenticated, domainApi);

  app.use(`${endpointEntry}/project`, isAuthenticated, projectApi);

  app.use(`${endpointEntry}/publish`, isAuthenticated, publishApi);

  app.use('/', (_req: Request, res: Response) => {
    res.send('Welcome to MY PAGE 1.0');
  });
};