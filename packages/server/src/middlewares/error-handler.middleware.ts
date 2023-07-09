import { Request, Response, NextFunction } from 'express';
import { StatusCode, ErrorMessage } from '../utils/constants';
import { HttpError } from '../utils/helpers';

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {

  console.log(err);
  
  if (err.message.toLowerCase() === ErrorMessage.UNAUTHORIZED.toLowerCase() && err.status === StatusCode.UNAUTHORIZED) {
    res.status(err.status).json({ message: err.message });
  }

  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message });
  }
  
  res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: ErrorMessage.INTERNAL_SERVER_ERROR });
};