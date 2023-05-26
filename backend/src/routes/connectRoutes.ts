import { Request, Response } from 'express';
import { app } from '../index';
import { publishApi } from '../api';
import { ENDPOINT_ENTRY, ErrorMessage, StatusCode } from '../utils/constants';
import { HttpError } from '../utils/helpers';


export const connectRoutes = () => {
  app.use(`${ENDPOINT_ENTRY}/publish`, publishApi);

  app.use('/', (_req: Request, res: Response) => {
    res.send('Welcome to MY PAGE 1.0');
  });

  app.use('*', (_req: Request, res: Response) => {
    throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
  });
};