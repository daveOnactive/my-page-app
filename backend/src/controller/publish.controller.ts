import { Request, Response, NextFunction } from 'express';
import { PublishService } from '../services/publish.service';
import { HttpError } from '../utils/helpers';
import { StatusCode, ErrorMessage } from '../utils/constants';

export class PublishController {

  async createDeploy(req: Request, res: Response, next: NextFunction) {
    const publishService = new PublishService();
    console.log(Object.entries(req.body).length);
    try {
      if (!Object.entries(req.body).length) {
        throw new HttpError(ErrorMessage.BAD_REQUEST, StatusCode.BAD_REQUEST);
      }
      
      await publishService.publishProject();

      res.status(StatusCode.SUCCESS).json(req.body);

    } catch (error) {
      next(error);
    }
  }
}