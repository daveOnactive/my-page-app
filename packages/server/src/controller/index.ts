import { PublishController } from './publish.controller';
import { ProjectController } from './project.controller';
import { DomainController } from './domain.controller';
import { AuthenticationController } from './authentication.controller';

export const publishController = new PublishController();
export const projectController = new ProjectController();
export const domainController = new DomainController();
export const authenticationController = new AuthenticationController();