import express from 'express';
import { publishController } from '../controller';
import { publishValidator } from '../validators';

export const publishApi = express.Router();

publishApi.post('/', publishValidator, publishController.createDeploy);
publishApi.delete('/:deploymentId', publishController.deleteDeploy);