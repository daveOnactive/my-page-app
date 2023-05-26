import { Request, Response, NextFunction } from 'express';
import { StatusCode, ErrorMessage } from '../utils/constants';
import { HttpError } from '../utils/helpers';

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message });
  }
  
  return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: ErrorMessage.INTERNAL_SERVER_ERROR });
};