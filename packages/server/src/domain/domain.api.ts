import express from 'express';
import { domainController } from './domain.controller';
import { addDomainValidator, updateDomainValidator } from './domain.validator';

export const domainApi = express.Router();

domainApi.get('/:projectId', domainController.getProjectDomains);
domainApi.post('/:projectId', addDomainValidator, domainController.addDomainToProject);
domainApi.patch('/:projectId', updateDomainValidator, domainController.updateProjectDomain);
domainApi.delete('/:projectId/delete/:domain', domainController.deleteDomainFromProject);
