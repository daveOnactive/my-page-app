import Joi from 'joi';
import { StatusCode } from './constants';
import { Request, Response, NextFunction } from 'express';
export class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class ExceptionHandler {
  async handleException<T>(callback: () => Promise<T>) {
    try {
      return await callback();
    } catch (err: any) {
      throw new HttpError(err.message, StatusCode.BAD_REQUEST);
    }
  }
}

export class ValidatorBuilder {
  private schema: Joi.ObjectSchema<any>;

  constructor(schema: Joi.ObjectSchema<any>) {
    this.schema = schema;
  }

  validate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.schema.validateAsync(req.body);
      next();
    } catch (err: any) {
      res.status(StatusCode.BAD_REQUEST).json({ message: err.message });
    }
  };
}