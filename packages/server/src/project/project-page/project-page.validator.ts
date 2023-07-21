import Joi from 'joi';
import { ValidatorBuilder } from '../../utils/helpers';

const schema = Joi.object({
  name: Joi.string().required(),
  tree: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().required(),
    props: Joi.object({
      style: Joi.string(),
      className: Joi.string(),
      children: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.link('#schema.tree'))).required(),
    }).required(),
  }).required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  keywords: Joi.string().required(),
}).id('schema');

const updateSchema = Joi.object({
  name: Joi.string(),
  tree: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().required(),
    props: Joi.object({
      style: Joi.string(),
      className: Joi.string(),
      children: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.link('#schema.tree'))).required(),
    }).required(),
  }),
  title: Joi.string(),
  description: Joi.string(),
  keywords: Joi.string(),
}).id('schema');

export const updateProjectPageValidator = new ValidatorBuilder(updateSchema).validate;
export const projectPageValidator = new ValidatorBuilder(schema).validate;