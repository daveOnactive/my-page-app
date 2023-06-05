import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { StatusCode } from '../utils/constants';

const schema = Joi.object({
  name: Joi.string().required(),
  fileName: Joi.string().pattern(/^(page)$/).required(),
});

export const publishValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: err });
  }
};