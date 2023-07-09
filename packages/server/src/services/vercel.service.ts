import axios from 'axios';
import { StatusCode } from '../utils/constants';
import { HttpError, ExceptionHandler } from '../utils/helpers';

type VercelDeploymentBody = {
  deploymentId?: string;
  name: string;
  files: {
    data: string;
    file: string;
  }[]
}

export class VercelService {

  vercelApi = axios.create({
    baseURL: process.env.VERCEL_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
    }
  });

  private exceptionHandler = new ExceptionHandler();

  async createDeployment(body: VercelDeploymentBody) {
    const { name, files, deploymentId } = body;

    try {
      return await this.vercelApi.post('/v13/deployments', {
        deploymentId,
        name,
        files,
        'projectSettings': {
          'devCommand': null,
          'installCommand': null,
          'buildCommand': null,
          'outputDirectory': null,
          'rootDirectory': null,
          'framework': null
        }
      });
    } catch (err) {
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

  async deleteDeployment(projectId: string) {

    try {
      return await this.vercelApi.delete(`/v13/deployments/${projectId}`);
    } catch (err) {
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

  async checkDeploymentStatus(projectId: string) {
    try {
      const { data } = await this.vercelApi.get(`/v13/deployments/${projectId}`);

      return {
        url: data.url,
        readyState: data.readyState,
        name: data.name,
        deploymentId: data.id
      };
    } catch (err) {
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

  async getProjectDomains(projectId: string) {
    return this.exceptionHandler.handleException(async () => {
      const { data } = await this.vercelApi.get(`/v10/projects/${projectId}/domains`);

      return data;
    });
  }

  async addDomainToProject(projectId: string, domain: string) {
    return this.exceptionHandler.handleException(async () => {

      const { data } = await this.vercelApi.post(`/v10/projects/${projectId}/domains`, {
        name: domain
      });

      return data;
    });
  }

  async updateProjectDomain(projectId: string, oldDomain: string, newDomain: string) {
    return this.exceptionHandler.handleException(async () => {
      const { data } = await this.vercelApi.patch(`/v10/projects/${projectId}/domains/${oldDomain}`, {
        name: newDomain
      });

      return data;
    });
  }

  async deleteDomainFromProject(projectId: string, domain: string) {
    return this.exceptionHandler.handleException(async () => {
      const { data } = await this.vercelApi.delete(`/v10/projects/${projectId}/domains/${domain}`);

      return data;
    });
  }
}