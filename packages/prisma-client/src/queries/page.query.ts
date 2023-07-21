import { prisma, Page } from '..';
import{ Prisma} from '@prisma/client';

const getAllPage = async () => await prisma.page.findMany();

const getPageById = async (id: number) => {
  return await prisma.page.findUnique({
    where: {
      id,
    },
  });
};

const getPagesByProjectId = async (projectId: number) => {
  return await prisma.page.findMany({
    where: {
      projectId,
    }
  });
};

const createPage = async (data: Prisma.PageCreateInput) => {
  return await prisma.page.create({
    data,
  });
};

const updatePage = async (id: number, data: Partial<Prisma.PageCreateInput>) => {
  return await prisma.page.update({
    where: {
      id,
    },
    data,
  });
};

const deletePage = async (id: number) => {
  return await prisma.page.delete({
    where: {
      id
    },
  });
};

export const pageQuery = {
  getAllPage,
  getPageById,
  getPagesByProjectId,
  createPage,
  updatePage,
  deletePage,
};

