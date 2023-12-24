import { atom } from 'recoil';

export const templateName = atom({
  key: 'template_name',
  default: ''
});

type TemplateSections = {
  name: string;
  value?: number;
}

type TemplateColor = {
  name: string;
  value?: any;
  active?: string;
}

export const templateSections = atom<TemplateSections[]>({
  key: 'template_sections',
  default: [],
});

export const templatePages = atom<TemplateSections[]>({
  key: 'template_pages',
  default: [],
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
