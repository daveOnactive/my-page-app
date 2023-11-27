import { Accordion, Box } from "@my-page/design-system";

export const TemplateSections = () => {
  return (
    <Box my={4} mx={2}>
      <Accordion
      data={[
          {
            details: '',
            summary: 'Banner',
          },
          {
            details: '',
            summary: 'What we do',
          },
          {
            details: '',
            summary: 'Services',
          },
          {
            details: '',
            summary: 'Pricing',
          },
          {
            details: '',
            summary: 'Contact Us',
          },
          {
            details: '',
            summary: 'Newsletter',
          },
          {
            details: '',
            summary: 'Footer',
          }
        ]}
      />
    </Box>
  );
}