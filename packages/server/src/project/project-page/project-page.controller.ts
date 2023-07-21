import { pageQuery } from '@my-page/prisma-client';
import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../../utils/constants';

const { createPage, updatePage, getPagesByProjectId, deletePage, getPageById } = pageQuery;

class ProjectPage {
  
  async createPage(req: Request, res: Response, next: NextFunction) {
    try {
      const page = await createPage({
        name: req.body.name,
        tree: JSON.stringify(req.body.tree),
        project: {
          connect: {
            id: Number(req.params.projectId),
          }
        }
      });

      res.status(StatusCode.CREATED).json({ data: page });
    } catch (error) {
      next(error);
    }
  }

  async updatePage(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedPage = await updatePage(Number(req.params.pageId), {
        name: req.body.name,
        tree: JSON.stringify(req.body.tree),
      });

      res.status(StatusCode.SUCCESS).json({ data: updatedPage });
    } catch (error) {
      next(error);
    }
  }

  async getPages(req: Request, res: Response, next: NextFunction) {
    try {
      const pages = await getPagesByProjectId(Number(req.params.projectId));

      res.status(StatusCode.SUCCESS).json({ data: pages });
    } catch (error) {
      next(error);
    }
  }

  async getPage(req: Request, res: Response, next: NextFunction) {
    try {
      const page = await getPageById(Number(req.params.pageId));

      res.status(StatusCode.SUCCESS).json({ data: page });
    } catch (error) {
      next(error);
    }
  }

  async deletePage(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedPage = await deletePage(Number(req.params.pageId));

      res.status(StatusCode.SUCCESS).json({ data: deletedPage });
    } catch (error) {
      next(error);
    }
  }
}

export const projectPage =new ProjectPage();