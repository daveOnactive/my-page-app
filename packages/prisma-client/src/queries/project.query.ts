import { prisma } from '..';
import { Prisma } from '@prisma/client';

export const getAllProject = async () => await prisma.project.findMany();

export const getProjectById = async (id: number) => {
  return await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      page: true
    }
  });
};

export const getUserProject = async (userId: number) => {
  return await prisma.project.findMany({
    where: {
      userId,
    }
  });
};

export const createProject = async (data: Prisma.ProjectCreateInput) => {
  return await prisma.project.create({
    data,
    include: {
      page: true
    }
  });
};

export const updateProject = async (id: number, data: Partial<Prisma.ProjectCreateInput>) => {
  return await prisma.project.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteProject = async (id: number) => {
  const project = prisma.project.delete({
    where: {
      id
    }
  });

  const page = prisma.page.deleteMany({
    where: {
      projectId: id
    }
  });

  const transaction = await prisma.$transaction([page, project]);

  return transaction;
};