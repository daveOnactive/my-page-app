import { StatusCode } from '../utils/constants';
import { ElementTree, addHtmlRoot, convertToHTML } from '@my-page/libs';
import { Page } from '@my-page/prisma-client';
import { HttpError} from '../utils/helpers';

export class PublishService {
  async buildProject(pages: Page[]) {
    try {
      const files = [];

      for (const page of pages) {
        const build = addHtmlRoot({
          body: convertToHTML(JSON.parse(page.tree) as unknown as ElementTree),
          title: page.title || page.name,
        });

        files.push({
          data: build,
          file: `${page.name === 'home' ? 'index' : page.name}.html`
        });
      }

      return files;
    } catch (error: any) {
      throw new HttpError(error.message, StatusCode.BAD_REQUEST);
    }
  }
}