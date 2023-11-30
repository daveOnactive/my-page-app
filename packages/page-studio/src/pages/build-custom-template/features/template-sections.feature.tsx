import { Accordion, Box, Input, Paper } from "@my-page/design-system";


const Sections = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 2
      }}
    >
    {
      [1, 2, 3, 4, 5].map(item => (
        <Paper
          key={item}
          sx={{
            width: 150,
            height: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          variant='outlined'
        ></Paper>
      ))
    }
    </Box>
  )
}

export const TemplateSections = () => {
  return (
    <Box my={4} mx={2}>
      <Accordion
        data={[
          {
            details: <Sections />,
            summary: 'Banner',
          },
          {
            details: <Sections />,
            summary: 'Services',
          },
          {
            details: <Sections />,
            summary: 'Contact Us',
          },
          {
            details: <Sections />,
            summary: 'Newsletter',
          },
          {
            details: <Sections />,
            summary: 'Footer',
          }
        ]}
      />
      <Input
        variant='outlined'
        color='secondary'
        placeholder='Enter Page Section'
        fullWidth
        size='small'
        sx={{
          mt: 3
        }}
      />
    </Box>
  );
}