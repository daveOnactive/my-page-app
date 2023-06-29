import { createProject, updateProject, getProjectById, getUserProject, deleteProject, getProjectWithDomainById } from '@my-page/prisma-client';
import { ErrorMessage, StatusCode } from '../utils/constants';
import { HttpError } from '../utils/helpers';
import { Project } from '../model/project.model';

export class ProjectService {
  async createProject(requestBody: Project) {
    try {
      const project = await createProject({
        name: requestBody.name,
        status: requestBody.status,
        template: JSON.stringify(requestBody.tree),
        userId: requestBody.userId,
      });

      return project;
    } catch (error) {
      console.log(error);
      throw new HttpError(`${error}`, StatusCode.BAD_REQUEST);
    }
  }

  async updateProject(projectId: number, requestBody: Project) {
    try {
      const project = await updateProject(projectId, {
        name: requestBody.name,
        status: requestBody.status,
        template: JSON.stringify(requestBody.tree),
        userId: requestBody.userId,
        deploymentId: requestBody.deploymentId,
        deploymentUrl: requestBody.deploymentUrl,
      });

      return project;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async deactivateProject(projectId: number, userId: number) {
    try {
      const project = await getProjectById(projectId);
  
      return await updateProject(projectId, {
        name: project?.name || '',
        status: 0,
        template: project?.template || '',
        userId: userId,
      });
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async deleteProject(projectId: number) {
    try {
      const project = await deleteProject(projectId);
      return project;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async getProjects(userId: number) {
    try {
      const projects = await getUserProject(userId);
      return projects;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async getProjectById(projectId: number): Promise<Project> {
    try {
      const project = await getProjectWithDomainById(projectId);
      return {...project, tree: JSON.parse(project?.template || '')} as Project;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }
}