import { Request, Response, NextFunction} from 'express';
import { ProjectService } from '../services';
import { StatusCode } from '../utils/constants';

class ProjectController {

  static projectService: ProjectService;

  constructor(projectService: ProjectService) {
    ProjectController.projectService = projectService;
  }

  async createProject(req: Request, res: Response, next: NextFunction) {

    try {
      const requestBody = {
        name: req.body.name,
        status: req.body.status,
        tree: JSON.stringify(req.body.tree),
        userId: req.body.userId,
      };

      const project = await ProjectController.projectService.createProject(requestBody);

      res.status(StatusCode.CREATED).json({
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
        tree: JSON.stringify(req.body.tree),
        userId: req.body.userId,
      };

      const project = await ProjectController.projectService.updateProject(Number(req.params.projectId), requestBody);

      res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await ProjectController.projectService.deactivateProject(Number(req.params.projectId), Number(req.body.userId));
      res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await ProjectController.projectService.getProjects(Number(req.body.userId));
      res.status(StatusCode.SUCCESS).json({
        data: projects
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjectById(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await ProjectController.projectService.getProjectById(Number(req.params.projectId));
      res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }
}

export const projectController = new ProjectController(new ProjectService);