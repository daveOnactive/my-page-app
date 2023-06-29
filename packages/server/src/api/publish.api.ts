import express from 'express';
import { publishController } from '../controller';
import { publishValidator } from '../validators';

export const publishApi = express.Router();

publishApi.post('/:projectId', publishController.createDeploy);
publishApi.delete('/:projectId', publishController.deleteDeploy);