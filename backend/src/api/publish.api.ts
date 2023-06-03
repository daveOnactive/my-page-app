import express from 'express';
import { publishController } from '../controller';

export const publishApi = express.Router();

publishApi.post('/', publishController.createDeploy);
publishApi.delete('/:deploymentId', publishController.deleteDeploy);