import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../utils/helpers';

export class PublishController {

  async createDeploy(req: Request, res: Response, next: NextFunction) {
    try {
      if (Object.entries(req.body).length <= 0) {
        throw new HttpError('Request body is missing', 400);
      }
      res.status(200).json(req.body);
    } catch (error) {
      next(error);
    }
  }
}