import Joi from 'joi';
import { ValidatorBuilder } from '../utils/helpers';

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().required(),
});

const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  password: Joi.string().required(),
});

const validator = new ValidatorBuilder(schema);

export const forgotPasswordValidator = new ValidatorBuilder(forgotPasswordSchema).validate;

export const resetPasswordValidator = new ValidatorBuilder(resetPasswordSchema).validate;

export const authenticationValidator = validator.validate;