import { Box, Paper } from "@my-page/design-system";
import { useCustomTemplateState } from '../hooks';

export const TemplateSections = () => {

  const { sections } = useCustomTemplateState();

  const [ templateSection, setTemplateSection ] = sections;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 2,
      }}
    >
    {
      [1].map(item => (
        <Paper
          key={item}
          onClick={() => {
            setTemplateSection({
              name: `template_${item}`,
              template: '',
            })
          }}
          style={{
            margin: '.5rem',
            width: '100%',
            height: '100%',
            // display: 'flex',
            cursor: 'pointer',
            border: templateSection?.name === `template_${item}` ? '1px solid black' : ''
          }}
          variant='outlined'
        />
      ))
    }
    </Box>
  );
};