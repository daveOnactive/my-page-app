import axios from 'axios';
import { StatusCode } from '../utils/constants';
import { HttpError } from '../utils/helpers';

export class VercelService {

  vercelApi = axios.create({
    baseURL: process.env.VERCEL_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
    }
  });

  async createDeployment(name: string) {

    try {
      return await this.vercelApi.post('/', {
        name,
        gitSource: {
          ref: `${process.env.GITHUB_REF}`,
          repoId: `${process.env.GITHUB_REPO_ID}`,
          type: 'github'
        },
        projectSettings: {
          rootDirectory: 'app-shell',
          framework: `${process.env.PROJECT_FRAMEWORK}`,
        }
      });
    } catch (err) {
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

  async deleteDeployment(deploymentId: string) {

    try {
      return await this.vercelApi.delete(`/${deploymentId}`);
    } catch (err) {
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

  async checkDeploymentStatus(deploymentId: string) {
    try {
      const { data } = await this.vercelApi.get(`/${deploymentId}`);

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
}