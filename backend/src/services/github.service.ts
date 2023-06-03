import { Octokit } from '@octokit/rest';
import { StatusCode } from '../utils/constants';
import { HttpError } from '../utils/helpers';
import axios from 'axios';

export class GithubService {
  octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });
  }

  async getFileSha(filePath: string) {
    try {
      const fileResponse = await axios.get(
        `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO_NAME}/contents/${filePath}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
        }
      );
      const latestSha = fileResponse.data.sha;
      return latestSha;
    } catch (err) {
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }

  async createFile(fileName: string, content: string, ext: '.tsx') {

    try {
      const path = `app-shell/src/app/${fileName}${ext}`;

      const sha = await this.getFileSha(path);

      await this.octokit.request(`PUT /repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO_NAME}/contents/${path}`, {
        owner: process.env.GITHUB_OWNER,
        repo: process.env.GITHUB_REPO_NAME,
        path: path,
        sha,
        message: 'updated page file in app-shell',
        committer: {
          name: process.env.GITHUB_OWNER,
          email: process.env.GITHUB_OWNER_EMAIL
        },
        content: Buffer.from(content).toString('base64'),
        headers: {
          'X-GitHub-Api-Version': process.env.GITHUB_API_VERSION
        }
      });
    } catch (err) {
      throw new HttpError(`${err}`, StatusCode.BAD_REQUEST);
    }
  }
}