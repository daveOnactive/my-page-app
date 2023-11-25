import { Box } from "@my-page/design-system";

export const TemplatesList = () => {
  return (
    <Box sx={{
      mt: 6,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 10
    }}>
      <Box
        sx={{
          width: '100%',
          height: 500,
          bgcolor: 'grey'
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: 500,
          bgcolor: 'grey'
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: 500,
          bgcolor: 'grey'
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: 500,
          bgcolor: 'grey'
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: 500,
          bgcolor: 'grey'
        }}
      />
    </Box>
  );
};