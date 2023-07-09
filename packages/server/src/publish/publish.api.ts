import express from 'express';
import { publishController } from './publish.controller';

export const publishApi = express.Router();

publishApi.post('/:projectId', publishController.createDeploy);
publishApi.delete('/:projectId', publishController.deleteDeploy);