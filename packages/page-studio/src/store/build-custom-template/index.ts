import { atom } from 'recoil';

type TemplateSections = {
  name: string;
  template?: string;
}

type TemplateColor = {
  name: string;
  value?: any;
  active?: string;
}

type TemplateName = {
  name: string;
  category?: string;
}

export const templateName = atom<TemplateName>({
  key: 'template_name',
  default: {
    name: 'testing',
    category: 'portfolio',
  }
});

export const templateSections = atom<TemplateSections>({
  key: 'template_sections',
  default: {
    name: 'template_0',
    template: '',
  },
});

export const templateColors = atom<TemplateColor>({
  key: 'template_colors',
  default: {
    name: '',
  }
});

export const templateFonts = atom({
  key: 'template_fonts',
  default: ''
});
