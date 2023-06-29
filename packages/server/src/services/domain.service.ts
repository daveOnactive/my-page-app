import { createDomain, updateDomain, deleteDomain, getDomainById, getDomainAndProjectByUserId } from '@my-page/prisma-client';
import { Domain } from '../model';
import { ErrorMessage, StatusCode } from '../utils/constants';
import { HttpError} from '../utils/helpers';

export class DomainService {
  async createDomain(requestBody: Domain) {
    try {
      const domain = await createDomain({
        name: requestBody.name,
        status: requestBody.status,
        userId: requestBody.userId,
        projectId: requestBody.projectId,
      });

      return domain;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async updateDomain(domainId: number, requestBody: Domain) {
    try {
      const domain = await updateDomain(domainId, {
        name: requestBody.name,
        status: requestBody.status,
        userId: requestBody.userId,
        projectId: requestBody.projectId,
      });

      return domain;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async deactivateDomain(domainId: number, userId: number) {
    try {
      const domain = await getDomainById(domainId);
  
      return await updateDomain(domainId, {
        name: domain?.name || '',
        status: 0,
        userId: userId,
        projectId: domain?.projectId || 0,
      });
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async deleteDomain(domainId: number) {
    try {
      const domain = await deleteDomain(domainId);
      return domain;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async getDomainById(domainId: number) {
    try {
      const domain = await getDomainById(domainId);
      return domain;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }

  async getDomains(userId: number) {
    try {
      const domains = await getDomainAndProjectByUserId(userId);
      return domains;
    } catch (error) {
      console.log(error);
      throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
  }
}