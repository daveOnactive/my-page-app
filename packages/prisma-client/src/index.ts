import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected');
  } catch(e) {
    console.log(e);
  }
};

connectDB();

// Prisma queries
export { getAllProject, createProject, deleteProject, getProjectById, updateProject, getUserProject } from './queries/project.query';

export { createUser, deleteUser, getAllUser, getUserById, updateUser, getUserByEmail } from './queries/user.query';

export { pageQuery } from './queries/page.query';

// Models
export { User, Project, Page, } from './models';

