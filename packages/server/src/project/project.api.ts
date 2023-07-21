import express from 'express';
import { projectPage, projectPageValidator, updateProjectPageValidator } from './project-page';
import { projectController } from './project.controller';
import { projectValidator, updateProjectValidator } from './project.validator';

export const projectApi = express.Router();

projectApi.get('/', projectController.getProjects);
projectApi.get('/:projectId', projectController.getProjectById);
projectApi.post('/', projectValidator, projectController.createProject);
projectApi.patch('/:projectId', updateProjectValidator, projectController.updateProject);
projectApi.delete('/:projectId', projectController.deleteProject);

projectApi.get('/:projectId/page', projectPage.getPages);
projectApi.get('/:projectId/page/:pageId', projectPage.getPage);
projectApi.post('/:projectId/page', projectPageValidator, projectPage.createPage);
projectApi.patch('/:projectId/page/:pageId', updateProjectPageValidator, projectPage.updatePage);
projectApi.delete('/page/:pageId', projectPage.deletePage);
