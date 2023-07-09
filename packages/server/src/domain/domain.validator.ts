import Joi from 'joi';
import { ValidatorBuilder } from '../utils/helpers';

const addDomainSchema = Joi.object({
  domain: Joi.string().required(),
});

const updateDomainSchema = Joi.object({
  oldDomain: Joi.string().required(),
  newDomain: Joi.string().required(),
});


export const addDomainValidator = new ValidatorBuilder(addDomainSchema).validate;

export const updateDomainValidator = new ValidatorBuilder(updateDomainSchema).validate;