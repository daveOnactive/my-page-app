require('dotenv').config();

import express from 'express';
import { connectRoutes} from './routes/connect-routes';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares';
import { ENDPOINT_ENTRY } from './utils/constants';

class Server {
  app = express();
  private PORT = process.env.PORT || 3000;

  private bodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  middleware() {
    this.app.use(errorHandler);
  }

  init() {
    this.bodyParser();
    this.app.listen(this.PORT, async () => {
      console.log(`Server running at http://localhost:${this.PORT}`);
    });
  }

  initializeRoutes() {
    connectRoutes(ENDPOINT_ENTRY);
  }
}

const server = new Server();
export const app = server.app;

server.init();
server.initializeRoutes();
server.middleware();
