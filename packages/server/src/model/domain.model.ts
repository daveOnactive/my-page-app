import { Project } from './project.model';

export type Domain = {
  id?: number;
  name: string;
  status: number;
  userId: number;
  projectId: number;
  project?: Project;
};