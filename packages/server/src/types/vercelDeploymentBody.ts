export type VercelDeploymentBody = {
  name: string;
  files: {
    data: string;
    file: string;
  }[]
}