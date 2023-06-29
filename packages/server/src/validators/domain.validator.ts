import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { StatusCode } from '../utils/constants';

const schema = Joi.object({
  name: Joi.string().required(),
  status: Joi.number().required(),
  userId: Joi.number().required(),
  projectId: Joi.number().required(),
}).id('schema');

export const domainValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: err });
  }
};