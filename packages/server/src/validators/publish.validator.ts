import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { StatusCode } from '../utils/constants';

const schema = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  tree: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().required(),
    props: Joi.object({
      style: Joi.string(),
      className: Joi.string(),
      children: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.link('#schema.tree'))).required(),
    }).required(),
  }).required(),
}).id('schema');

export const publishValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: err });
  }
};