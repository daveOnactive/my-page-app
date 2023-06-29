import express from 'express';
import { projectController } from '../controller';
import { projectValidator } from '../validators';

export const projectApi = express.Router();

projectApi.get('/', projectController.getProjects);
projectApi.get('/:projectId', projectController.getProjectById);
projectApi.post('/', projectValidator, projectController.createProject);
projectApi.patch('/:projectId', projectValidator, projectController.updateProject);
projectApi.delete('/:projectId', projectController.deleteProject);
