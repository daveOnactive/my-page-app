import { atom } from 'recoil';

export const templateName = atom({
  key: 'template_name',
  default: ''
});

export const templateSection = atom({
  key: 'template_sections',
  default: {

  },
});

export const templatePages = atom({
  key: 'template_sections',
  default: {

  },
});

export const templateColors = atom({
  key: 'template_colors',
  default: {}
});

export const templateFonts = atom({
  key: 'template_fonts',
  default: ''
});
