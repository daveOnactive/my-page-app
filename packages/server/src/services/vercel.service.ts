import axios from 'axios';
import { VercelDeploymentBody } from '../model';
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

  async createDeployment(body: VercelDeploymentBody) {
    const { name, files, deploymentId } = body;

    try {
      return await this.vercelApi.post('/', {
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