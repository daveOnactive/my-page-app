import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCode } from '../utils/constants';
import { HttpError } from '../utils/helpers';

class Authorization {
  private static jwtSecretKey = process.env.JWT_SECRET_KEY as string;
  async verify(req: Request, res: Response, next: NextFunction){
    try {
      const token = req.headers.authorization?.split(' ')[1] as string;
      if (!token) {
        throw new HttpError('Token not found', StatusCode.UNAUTHORIZED);
      }
      const decoded = jwt.verify(token, Authorization.jwtSecretKey) as { id: string };
      req.body.userId = decoded.id;
      next();
    } catch (err: any) {
      res.status(StatusCode.UNAUTHORIZED).json({ message: err.message });
    }
  }
}

export const isAuthenticated = new Authorization().verify;