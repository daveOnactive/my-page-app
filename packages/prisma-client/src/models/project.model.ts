export type Project = {
  id?: number;
  name: string;
  status: number;
  tree: string;
  userId: number;
  domain?: string;
  deploymentId?: string;
  deploymentUrl?: string;
  vercelId?: string;
}