export type VercelDeploymentBody = {
  deploymentId?: string;
  name: string;
  files: {
    data: string;
    file: string;
  }[]
}