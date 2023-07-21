import { Request, Response, NextFunction } from 'express';
import { StatusCode, ErrorMessage } from '../utils/constants';
import { HttpError } from '../utils/helpers';

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {

  console.log(err);
  let status = StatusCode.INTERNAL_SERVER_ERROR;
  let message = ErrorMessage.INTERNAL_SERVER_ERROR as string;
  
  if (err.message.toLowerCase() === ErrorMessage.UNAUTHORIZED.toLowerCase() && err.status === StatusCode.UNAUTHORIZED) {
    status = StatusCode.UNAUTHORIZED;
    message = err.message;
  }

  if (err instanceof HttpError) {
    status = err.status;
    message = err.message;
  }
  
  res.status(status).json({ message: message || ErrorMessage.INTERNAL_SERVER_ERROR });
};