import express from 'express';
import { domainController } from '../controller';
import { domainValidator } from '../validators';

export const domainApi = express.Router();

domainApi.get('/', domainController.getDomains);
domainApi.get('/:domainId', domainController.getDomainById);
domainApi.post('/', domainValidator, domainController.createDomain);
domainApi.patch('/:domainId', domainValidator, domainController.updateDomain);
domainApi.delete('/:domainId', domainController.deleteDomain);
