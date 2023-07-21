import { Request, Response, NextFunction} from 'express';
import { createProject, updateProject, getProjectById, getUserProject, deleteProject } from '@my-page/prisma-client';
import { StatusCode } from '../utils/constants';

class ProjectController {
  async createProject(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.headers.userId);
      const requestBody = {
        name: req.body.name,
        status: req.body.status,
        tree: JSON.stringify(req.body.tree),
        userId,
      };

      const project = await createProject({
        name: requestBody.name,
        status: requestBody.status,
        user: {
          connect: {
            id: requestBody.userId,
          }
        },
        page: {
          createMany: {
            data: [
              {
                name: 'home',
                tree: requestBody.tree,
              }
            ]
          }
        }
      });

      res.status(StatusCode.CREATED).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProject(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.headers.userId);
      const project = await updateProject(Number(req.params.projectId), {...req.body, userId});

      res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await deleteProject(Number(req.params.projectId));

      res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.headers.userId);
      const projects = await getUserProject(userId);

      res.status(StatusCode.SUCCESS).json({
        data: projects
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjectById(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await getProjectById(Number(req.params.projectId));

      res.status(StatusCode.SUCCESS).json({
        data: project
      });
    } catch (error) {
      next(error);
    }
  }
}

export const projectController = new ProjectController();