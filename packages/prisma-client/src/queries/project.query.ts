import { prisma } from '..';

export const getAllProject = async () => await prisma.project.findMany();

export const getProjectById = async (id: number) => {
  return await prisma.project.findUnique({
    where: {
      id,
    },
  });
};

export const getProjectWithDomainById = async (id: number) => {
  return await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      domain: true,
    },
  });
};

export const getUserProject = async (userId: number) => {
  return await prisma.project.findMany({
    where: {
      userId,
    }
  });
};

type Project = {
  name: string;
  status: number;
  template: string;
  domainId?: number;
  userId: number
}

export const createProject = async (data: Project) => {
  return await prisma.project.create({
    data,
  });
};

export const updateProject = async (id: number, data: Project) => {
  return await prisma.project.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteProject = async (id: number) => {
  return await prisma.project.delete({
    where: {
      id
    }
  });
};