import { Request, Response, NextFunction } from 'express';
import { AuthenticationService } from '../services/authentication.service';
import { StatusCode } from '../utils/constants';

export class AuthenticationController {
  private static authenticationService = new AuthenticationService();

  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const requestBody = {
        email: req.body.email,
        password: req.body.password,
      };

      const user = await AuthenticationController.authenticationService.createUser(requestBody);

      res.status(StatusCode.CREATED).json({
        data: user
      });
    } catch (error) {
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const requestBody = {
        email: req.body.email,
        password: req.body.password,
      };

      const token = await AuthenticationController.authenticationService.loginUser(requestBody);

      res.status(StatusCode.SUCCESS).json({
        token: token
      });
    } catch (error) {
      console.log('error:', error);
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {

      const result = await AuthenticationController.authenticationService.forgotPassword(req.body.email);

      res.status(StatusCode.SUCCESS).json({
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const requestBody = {
        password: req.body.password,
        token: req.body.token,
      };

      const result = await AuthenticationController.authenticationService.resetPassword(requestBody.password, requestBody.token);

      res.status(StatusCode.SUCCESS).json({
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
}