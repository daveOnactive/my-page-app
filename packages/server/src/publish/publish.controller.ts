import { Request, Response, NextFunction } from 'express';
import { VercelService, ProjectService } from '../services';
import { StatusCode } from '../utils/constants';
import { ElementTree, addHtmlRoot, convertToHTML } from '@my-page/libs';

class PublishController {
  static projectService: ProjectService;
  static vercelService: VercelService;

  constructor(projectService: ProjectService, vercelService: VercelService) {
    PublishController.projectService = projectService;
    PublishController.vercelService = vercelService;
  }

  async createDeploy(req: Request, res: Response, next: NextFunction) {

    try {
      const projectId = Number(req.params.projectId);


      const project = await PublishController.projectService.getProjectById(projectId);

      if (project) {

        const build = addHtmlRoot({
          body: convertToHTML(project.tree as unknown as ElementTree),
          title: project.name,
        });

        const { data } = await PublishController.vercelService.createDeployment({
          deploymentId: String(project?.deploymentId || '') || undefined,
          name: project.name.replace(/ /g, '-').toLowerCase(),
          files: [
            {
              data: build,
              file: 'index.html'
            }
          ]
        });

    
        await PublishController.projectService.updateProject(projectId, {
          name: project.name,
          status: project.status,
          tree:  JSON.stringify(project.tree),
          userId: project.userId,
          deploymentId: data.id,
          deploymentUrl: data.url,
          vercelId: data.projectId,
        });

        res.status(StatusCode.SUCCESS).json({
          message: 'Deployment is created and in progress...',
          deploymentUrl: data.url,
        });
      }
      

      res.status(StatusCode.BAD_REQUEST).json({
        message: 'Project not found.',
      });
    
    } catch (error) {
      next(error);
    }
  }

  async deleteDeploy(req: Request, res: Response, next: NextFunction) {
    try {
      const projectId = Number(req.params.projectId);

      const project = await PublishController.projectService.getProjectById(projectId);

      if (!project?.deploymentId) {
        return res.status(StatusCode.BAD_REQUEST).json({
          message: 'Deployment not found.',
        });
      }

      await PublishController.vercelService.deleteDeployment(String(project?.deploymentId || ''));

      await PublishController.projectService.updateProject(projectId, {
        name: project.name,
        status: project.status,
        tree: JSON.stringify(project.tree),
        userId: project.userId,
        deploymentId: '',
        deploymentUrl: '',
        vercelId: project.vercelId
      });

      res.status(StatusCode.SUCCESS).json({
        message: 'Deleted deployment successfully.',
      });

    } catch (error) {
      next(error);
    }
  }
}

export const publishController = new PublishController(new ProjectService, new VercelService);