import { Request, Response } from 'express';
import { app } from '../index';
import { publishApi, projectApi, domainApi, authenticationApi } from '../api';


export const connectRoutes = (endpointEntry: string) => {
  app.use('/auth', authenticationApi);
   
  app.use(`${endpointEntry}/domains`, domainApi);

  app.use(`${endpointEntry}/project`, projectApi);

  app.use(`${endpointEntry}/publish`, publishApi);

  app.use('/', (_req: Request, res: Response) => {
    res.send('Welcome to MY PAGE 1.0');
  });
};