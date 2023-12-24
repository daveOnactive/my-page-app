import { useRecoilState } from 'recoil';

import { templateName, templateSections, templatePages, templateColors, templateFonts } from '../../../store';

export const useCustomTemplateState = () => {
  const name = useRecoilState(templateName);
  const sections = useRecoilState(templateSections);
  const pages = useRecoilState(templatePages);
  const colors = useRecoilState(templateColors);
  const fonts = useRecoilState(templateFonts);

  return {
    name,
    sections,
    pages,
    colors,
    fonts,
    customTemplate: {
      name: name[0],
      sections: sections[0],
      pages: pages[0],
      colors: colors[0],
      fonts: fonts[0]
    }
  };
};

