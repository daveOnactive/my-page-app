import { prisma } from '../index';

export const allTemplates = async () => await prisma.template.findMany();
