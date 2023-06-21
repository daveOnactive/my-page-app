import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// prisma queries
export { createDomain, deleteDomain, getAllDomain, getDomainById, updateDomain } from './queries/domain.query';
export { getAllProject, createProject, deleteProject, getProjectById, updateProject} from './queries/project.query';
export { createUser, deleteUser, getAllUser, getUserById, updateUser } from './queries/user.query';