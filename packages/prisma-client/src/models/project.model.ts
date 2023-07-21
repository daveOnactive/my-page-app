export type Project = {
  id?: number;
  name: string;
  status: number;
  userId: number;
  deploymentId?: string;
  deploymentUrl?: string;
  vercelId?: string;
}