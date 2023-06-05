import { Request, Response, NextFunction } from 'express';
import { PublishService, GithubService, VercelService } from '../services';
import { StatusCode } from '../utils/constants';
import { componentBuilder } from '../libs';

export class PublishController {

  async createDeploy(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const fileName = body.fileName;
    const ext = '.tsx';
    const pageContent = componentBuilder();
    const deploymentName = body.name;
    const githubService = new GithubService();
    const vercelService = new VercelService();
    const publishService = new PublishService(fileName, pageContent, ext);
    let deploymentId = 'RUNNING_ON_DEV_ENV';
    try {
      if (process.env.NODE_ENV !== 'dev') {
        await githubService.createFile(fileName, pageContent, ext);
        const { data } = await vercelService.createDeployment(deploymentName);
        deploymentId = data.id;
      } else {
        await publishService.publishProject();
      }

      res.status(StatusCode.SUCCESS).json({
        message: 'Deployment is created and in progress...',
        deploymentId,
      });

    } catch (error) {
      next(error);
    }
  }

  async deleteDeploy(req: Request, res: Response, next: NextFunction) {
 
    const vercelService = new VercelService();
    try {

      const deploymentId = req.params.deploymentId;
      await vercelService.deleteDeployment(deploymentId);

      res.status(StatusCode.SUCCESS).json({
        message: 'Deleted deployment successfully.',
      });

    } catch (error) {
      next(error);
    }
  }
}