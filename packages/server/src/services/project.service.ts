import { ElementTree, addHtmlRoot, convertToHTML } from '@my-page/libs';

export class ProjectService {
  domTree: ElementTree;
  title: string;
  constructor(tree: ElementTree, title: string) {
    this.domTree = tree;
    this.title = title;
  }

  buildProject() {
    const project = addHtmlRoot({
      body: convertToHTML(this.domTree),
      title: this.title
    });
    return project;
  }
}