import { createProject, updateProject, getProjectById, getUserProject, deleteProject, Project } from '@my-page/prisma-client';
import { ErrorMessage, StatusCode } from '../utils/constants';
import { HttpError, ExceptionHandler } from '../utils/helpers';

export class ProjectService {

  exceptionHandler = new ExceptionHandler();
  async createProject(requestBody: Project) {
    try {
      const project = await createProject({
        name: requestBody.name,
        status: requestBody.status,
        tree: requestBody.tree,
        userId: requestBody.userId,
      });

      return project;
    } catch (error) {
      throw new HttpError(`${error}`, StatusCode.BAD_REQUEST);
    }
  }

  async updateProject(projectId: number, requestBody: Project) {
    try {
      const project = await updateProject(projectId, {
        name: requestBody.name,
        status: requestBody.status,
        tree: requestBody.tree,
        userId: requestBody.userId,
        deploymentId: requestBody.deploymentId,
        deploymentUrl: requestBody.deploymentUrl,
        vercelId: requestBody.vercelId,
      });

      return project;
    } catch (error) {
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async deactivateProject(projectId: number, userId: number) {
    try {
      const project = await getProjectById(projectId);
  
      return await updateProject(projectId, {
        name: project?.name || '',
        status: 0,
        tree: project?.tree || '',
        userId: userId,
      });
    } catch (error) {
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async deleteProject(projectId: number) {
    try {
      const project = await deleteProject(projectId);
      return project;
    } catch (error) {
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async getProjects(userId: number) {

    try {
      const projects = await getUserProject(userId);
      return projects;
    } catch (error: any) {
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async getProjectById(projectId: number): Promise<Project> {
    try {
      const project = await getProjectById(projectId);
      return {...project, tree: JSON.parse(project?.tree || '')} as Project;
    } catch (error) {
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }
}