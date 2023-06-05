import { exec } from 'child_process';
import util from 'util';
import fs from 'fs/promises';
import path from 'path';
import { StatusCode } from '../utils/constants';
import { HttpError } from '../utils/helpers';

const exeCommand = util.promisify(exec);

export class PublishService {
  fileName = '';
  fileContent = '';
  ext = '';
  constructor(fileName: string, fileContent: string, ext: string) {
    this.fileName = fileName;
    this.fileContent = fileContent;
    this.ext = ext;
  }

  private async createFile() {
    const file = `${this.fileName}${this.ext}`;

    const filePath = path.join(__dirname, '../../../app-shell/src/app/', file);

    try {
      await fs.writeFile(filePath, this.fileContent);
    } catch (err) {
      console.error(`Error creating JS file: ${err}`);
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

  private async buildProject() {
    try {
      const { stdout, stderr } = await exeCommand('npm run build-app-shell:local');
      console.log('stdout:', stdout);
      console.error('stderr:', stderr);
    } catch (err) {
      console.error(`Error building server: ${err}`);
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

  async publishProject() {
    try {
      await this.createFile();
      await this.buildProject();
    } catch (err) {
      console.error(`Error publishing project: ${err}`);
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

}
