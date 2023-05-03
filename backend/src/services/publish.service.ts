import { exec } from 'child_process';
import util from 'util';

const exeCommand = util.promisify(exec);

export class PublishService {
  private async buildProject() {
    try {
      const { stdout, stderr } = await exeCommand('npm run build-app-shell:local');
      console.log('stdout:', stdout);
      console.error('stderr:', stderr);
    } catch (err) {
      console.error(`Error building server: ${err}`);
      throw err;
    }
  }

  async publishProject() {
    try {
      await this.buildProject();
    } catch (err) {
      console.error(`Error publishing project: ${err}`);
      throw err;
    }
  }
}
