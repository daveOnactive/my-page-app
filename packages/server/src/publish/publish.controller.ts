import { Request, Response, NextFunction } from 'express';
import { VercelService } from '../services';
import { StatusCode } from '../utils/constants';
import { getProjectById, updateProject, Page } from '@my-page/prisma-client';
import { PublishService } from './publish.service';
import { HttpError} from '../utils/helpers';

class PublishController {
  static vercelService: VercelService;
  private static publishService: PublishService;

  constructor(vercelService: VercelService, publishService: PublishService) {
    PublishController.vercelService = vercelService;
    PublishController.publishService = publishService;
  }

  async createDeploy(req: Request, res: Response, next: NextFunction) {
    try {
      const projectId = Number(req.params.projectId);

      const project = await getProjectById(projectId);

      if (!project) {
        throw new HttpError('Project not found.', StatusCode.BAD_REQUEST);
      }

      const files = project ? await PublishController.publishService.buildProject(project.page as Page[]) : [];


      const { data } = await PublishController.vercelService.createDeployment({
        deploymentId: String(project?.deploymentId || '') || undefined,
        name: project.name.replace(/ /g, '-').toLowerCase(),
        files
      });

      await updateProject(projectId, {
        deploymentId: data.id,
        deploymentUrl: data.url,
        vercelId: data.projectId,
      });

      res.status(StatusCode.SUCCESS).json({
        message: 'Deployment is created and in progress...',
        deploymentUrl: data.url,
      });
    
    } catch (error) {
      next(error);
    }
  }

  async deleteDeploy(req: Request, res: Response, next: NextFunction) {
    try {
      const projectId = Number(req.params.projectId);

      const project = await getProjectById(projectId);

      if (!project?.deploymentId) {
        throw new HttpError('Deployment not found.', StatusCode.BAD_REQUEST);
      }

      await PublishController.vercelService.deleteDeployment(String(project?.deploymentId || ''));

      await updateProject(projectId, {
        deploymentId: '',
        deploymentUrl: '',
        vercelId: '',
      });

      res.status(StatusCode.SUCCESS).json({
        message: 'Deleted deployment successfully.',
      });

    } catch (error) {
      next(error);
    }
  }
}

export const publishController = new PublishController(new VercelService, new PublishService);