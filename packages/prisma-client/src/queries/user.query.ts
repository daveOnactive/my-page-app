import { prisma } from '..';
import { User } from '../models';

export const getAllUser = async () => await prisma.user.findMany();

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id,
    }
  });
};

export const getUserByEmail = async (email: string) => {
  try {
    return await prisma.user.findUnique({
      where: {
        email,
      }
    });
  } catch (err) {
    throw err;
  }
  
};

export const createUser = async (data: User) => {
  return await prisma.user.create({
    data,
  });
};

export const updateUser = async (id: number, data: User) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
};