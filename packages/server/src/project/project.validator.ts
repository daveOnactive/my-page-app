import Joi from 'joi';
import { ValidatorBuilder } from '../utils/helpers';

const schema = Joi.object({
  name: Joi.string().required(),
  status: Joi.number().required(),
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

const UpdateProjectSchema = Joi.object({
  name: Joi.string(),
  status: Joi.number(),
});

export const updateProjectValidator = new ValidatorBuilder(UpdateProjectSchema).validate;

export const projectValidator = new ValidatorBuilder(schema).validate;