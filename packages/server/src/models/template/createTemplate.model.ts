import { prisma } from '../index';

export const createTemplate = async (name: string) => {
  return await prisma.template.create({
    data: {
      name
    }
  });
};