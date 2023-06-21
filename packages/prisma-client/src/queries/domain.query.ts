import { prisma } from '../index';

type Domain = {
  name: string;
  status: number;
  userId: number
}

export const createDomain = async (data: Domain) => {
  return await prisma.domain.create({
    data,
  });
};

export const getAllDomain = async () => await prisma.domain.findMany();

export const getDomainById = async (id: number) => {
  return await prisma.domain.findUnique({
    where: {
      id,
    }
  });
};

export const updateDomain = async (id: number, data: Domain) => {
  return await prisma.domain.update({
    where: {
      id,
    },
    data
  });
};

export const deleteDomain = async (id: number) => {
  return await prisma.domain.delete({
    where: {
      id,
    }
  });
};