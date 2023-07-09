import { VercelService } from '../services';
import { getProjectById } from '@my-page/prisma-client';
import { ExceptionHandler } from '../utils/helpers';

export class DomainService {

  private static vercelService = new VercelService();
  private exceptionHandler = new ExceptionHandler();

  private async getProject(id: string) {
    return this.exceptionHandler.handleException(async () => {
      const project = await getProjectById(Number(id));
      this.exceptionHandler.throwIf(!project, 'Project not found');

      return project;
    });
  }

  async getProjectDomains(projectId: string) {
    return this.exceptionHandler.handleException(async () => {
      const project = await this.getProject(projectId);

      if (!project?.vercelId) {
        return [];
      }

      const domains = await DomainService.vercelService.getProjectDomains(String(project.vercelId));

      return domains;
    });
  }

  addDomainToProject(projectId: string, domain: string) {
    return this.exceptionHandler.handleException(async () => {
      const project = await this.getProject(projectId);

      if (!project?.vercelId) {
        return;
      }

      const domains = await DomainService.vercelService.addDomainToProject(String(project.vercelId), domain);

      return domains;
    });
  }

  updateProjectDomain(projectId: string, oldDomain: string, newDomain: string) {
    return this.exceptionHandler.handleException(async () => {
      const project = await this.getProject(projectId);

      if (!project?.vercelId) {
        return;
      }

      const domains = await DomainService.vercelService.updateProjectDomain(String(project.vercelId), oldDomain, newDomain);

      return domains;
    });
  }

  deleteDomainFromProject(projectId: string, domain: string) {
    return this.exceptionHandler.handleException(async () => {
      const project = await this.getProject(projectId);

      if (!project?.vercelId) {
        return;
      }

      const domains = await DomainService.vercelService.deleteDomainFromProject(String(project.vercelId), domain);

      return domains;
    });
  }
}