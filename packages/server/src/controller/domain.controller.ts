import { Request, Response, NextFunction} from 'express';
import { DomainService } from '../services';
import { StatusCode } from '../utils/constants';

export class DomainController {

  async createDomain(req: Request, res: Response, next: NextFunction) {
    try {
      const requestBody = {
        name: req.body.name,
        status: req.body.status,
        projectId: req.body.projectId,
        userId: req.body.userId,
      };

      const domainService = new DomainService();

      const domain = await domainService.createDomain(requestBody);

      return res.status(StatusCode.CREATED).json({
        data: domain
      });
    } catch (error) {
      next(error);
    }
  }

  async updateDomain(req: Request, res: Response, next: NextFunction) {
    try {
      const requestBody = {
        name: req.body.name,
        status: req.body.status,
        projectId: req.body.projectId,
        userId: req.body.userId,
      };

      const domainService = new DomainService();

      const domain = await domainService.updateDomain(Number(req.params.domainId), requestBody);

      return res.status(StatusCode.SUCCESS).json({
        data: domain
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteDomain(req: Request, res: Response, next: NextFunction) {
    try {
      const domainService = new DomainService();
      const domain = await domainService.deactivateDomain(Number(req.params.domainId), Number(req.body.userId));
      return res.status(StatusCode.SUCCESS).json({
        data: domain
      });
    } catch (error) {
      next(error);
    }
  }

  async getDomains(req: Request, res: Response, next: NextFunction) {
    try {
      const domainService = new DomainService();
      const domains = await domainService.getDomains(Number(req.body.userId));
      return res.status(StatusCode.SUCCESS).json({
        data: domains
      });
    } catch (error) {
      next(error);
    }
  }

  async getDomainById(req: Request, res: Response, next: NextFunction) {
    try {
      const domainService = new DomainService();
      const domain = await domainService.getDomainById(Number(req.params.domainId));
      return res.status(StatusCode.SUCCESS).json({
        data: domain
      });
    } catch (error) {
      next(error);
    }
  }
}