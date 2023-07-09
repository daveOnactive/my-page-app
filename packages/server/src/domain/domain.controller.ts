import { DomainService } from './domain.service';
import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../utils/constants';

class DomainController {
  static domainService = new DomainService();

  async getProjectDomains(req: Request, res: Response, next: NextFunction){
    try {
      const domain = await DomainController.domainService.getProjectDomains(req.params.projectId);

      res.status(StatusCode.SUCCESS).json(domain);
    } catch (error) {
      next(error);
    }
  }

  async addDomainToProject(req: Request, res: Response, next: NextFunction){
    try {
      const domain = await DomainController.domainService.addDomainToProject(req.params.projectId, req.body.domain);

      res.status(StatusCode.CREATED).json(domain);
    } catch (error) {
      next(error);
    }
  }

  async updateProjectDomain(req: Request, res: Response, next: NextFunction){
    try {
      const domain = await DomainController.domainService.updateProjectDomain(req.params.projectId, req.body.oldDomain, req.body.newDomain);

      res.status(StatusCode.SUCCESS).json(domain);
    } catch (error) {
      next(error);
    }
  }

  async deleteDomainFromProject(req: Request, res: Response, next: NextFunction){
    try {
      const domain = await DomainController.domainService.deleteDomainFromProject(req.params.projectId, req.params.domain);

      res.status(StatusCode.SUCCESS).json(domain);
    } catch (error) {
      next(error);
    }
  }
}

export const domainController = new DomainController();