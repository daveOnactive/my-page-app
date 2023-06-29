import { Request, Response, NextFunction} from 'express';
import { ProjectService } from '../services';
import { StatusCode } from '../utils/constants';

export class ProjectController {

  async createProject(req: Request, res: Response, next: NextFunction) {
    try {
      const requestBody = {
        name: req.body.name,
        status: req.body.status,
        tree: req.body.tree,
        userId: req.body.userId,
      };

      const projectService = new ProjectService();

      const project = await projectService.createProject(requestBody);

      return res.status(StatusCode.CREATED).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProject(req: Request, res: Response, next: NextFunction) {
    try {
      const requestBody = {
        name: req.body.name,
        status: req.body.status,
        tree: req.body.tree,
        userId: req.body.userId,
      };

      const projectService = new ProjectService();

      const project = await projectService.updateProject(Number(req.params.projectId), requestBody);

      return res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProject(req: Request, res: Response, next: NextFunction) {
    try {
      const projectService = new ProjectService();
      const project = await projectService.deactivateProject(Number(req.params.projectId), Number(req.body.userId));
      return res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projectService = new ProjectService();
      const projects = await projectService.getProjects(Number(req.body.userId));
      return res.status(StatusCode.SUCCESS).json({
        data: projects
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjectById(req: Request, res: Response, next: NextFunction) {
    try {
      const projectService = new ProjectService();
      const project = await projectService.getProjectById(Number(req.params.projectId));
      return res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }
}