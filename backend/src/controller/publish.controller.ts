import { Request, Response, NextFunction } from 'express';
import { PublishService } from '../services/publish.service';
import { HttpError } from '../utils/helpers';

export class PublishController {

  async createDeploy(req: Request, res: Response, next: NextFunction) {
    const publishService = new PublishService();
    try {
      if (Object.entries(req.body).length <= 0) {
        throw new HttpError('Request body is missing', 400);
      }
      
      await publishService.publishProject();

      res.status(200).json(req.body);

    } catch (error) {
      next(error);
    }
  }
}