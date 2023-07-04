import express from 'express';
import { authenticationController } from '../controller';
import { authenticationValidator, resetPasswordValidator, forgotPasswordValidator } from '../validators';

export const authenticationApi = express.Router();

authenticationApi.post('/login', authenticationValidator, authenticationController.loginUser);
authenticationApi.post('/register', authenticationValidator, authenticationController.registerUser);
authenticationApi.post('/forgot-password', forgotPasswordValidator, authenticationController.forgotPassword);
authenticationApi.post('/reset-password', resetPasswordValidator, authenticationController.resetPassword);
