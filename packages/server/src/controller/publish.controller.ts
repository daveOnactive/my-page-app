import { Request, Response, NextFunction } from 'express';
import { VercelService, ProjectService } from '../services';
import { StatusCode } from '../utils/constants';
import { ElementTree, addHtmlRoot, convertToHTML } from '@my-page/libs';

export class PublishController {

  async createDeploy(req: Request, res: Response, next: NextFunction) {

    try {
      const projectId = Number(req.params.projectId);

      const projectService = new ProjectService();
      const vercelService = new VercelService();


      const project = await projectService.getProjectById(projectId);

      if (project) {
        const tree = project.tree as ElementTree;

        const build = addHtmlRoot({
          body: convertToHTML(tree),
          title: project.name,
        });
    
        const { data } = await vercelService.createDeployment({
          deploymentId: String(project?.deploymentId || '') || undefined,
          name: project.name.replace(/ /g, '-').toLowerCase(),
          files: [
            {
              data: build,
              file: 'index.html'
            }
          ]
        });

    
        await projectService.updateProject(projectId, {
          name: project.name,
          status: project.status,
          tree,
          userId: project.userId,
          deploymentId: data.id,
          deploymentUrl: data.url,
        });

        return res.status(StatusCode.SUCCESS).json({
          message: 'Deployment is created and in progress...',
          deploymentUrl: data.url,
        });

      }
      

      return res.status(StatusCode.BAD_REQUEST).json({
        message: 'Project not found.',
      });
    
    } catch (error) {
      next(error);
    }
  }

  async deleteDeploy(req: Request, res: Response, next: NextFunction) {
    try {
      const projectId = Number(req.params.projectId);

      const vercelService = new VercelService();
      const projectService = new ProjectService();

      const project = await projectService.getProjectById(projectId);

      const tree = project.tree as ElementTree;

      if (!project?.deploymentId) {
        return res.status(StatusCode.BAD_REQUEST).json({
          message: 'Deployment not found.',
        });
      }

      await vercelService.deleteDeployment(String(project?.deploymentId || ''));

      await projectService.updateProject(projectId, {
        name: project.name,
        status: project.status,
        tree,
        userId: project.userId,
        deploymentId: '',
        deploymentUrl: '',
      });

      res.status(StatusCode.SUCCESS).json({
        message: 'Deleted deployment successfully.',
      });

    } catch (error) {
      next(error);
    }
  }
}