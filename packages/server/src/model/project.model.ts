import { ElementTree } from '@my-page/libs';

export type Project = {
  id?: number;
  name: string;
  status: number;
  tree: ElementTree;
  userId: number;
  domain?: string;
  deploymentId?: string;
  deploymentUrl?: string;
}