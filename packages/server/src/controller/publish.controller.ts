import { Request, Response, NextFunction } from 'express';
import { VercelService, ProjectService } from '../services';
import { StatusCode } from '../utils/constants';

export class PublishController {

  async createDeploy(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    
    // try {
    //   const projectService = new ProjectService(body.tree, body.title);
    //   const project = projectService.buildProject();
    //   const vercelService = new VercelService();
    
    //   const { data } = await vercelService.createDeployment({
    //     name: body.name,
    //     files: [
    //       {
    //         data: project,
    //         file: 'index.html'
    //       }
    //     ]
    //   });

    //   res.status(StatusCode.SUCCESS).json({
    //     message: 'Deployment is created and in progress...',
    //     deploymentId: data.id,
    //   });
    
    // } catch (error) {
    //   next(error);
    // }
  }

  async deleteDeploy(req: Request, res: Response, next: NextFunction) {
    try {
      const vercelService = new VercelService();
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