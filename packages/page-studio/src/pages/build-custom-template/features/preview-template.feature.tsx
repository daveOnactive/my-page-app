import { Card, Box } from "@my-page/design-system";

export const PreviewTemplate = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'scroll',
        position: 'relative',
        mb: 4
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: '90%',
          height: 700,
          position: 'absolute',
          top: 0,
        }}
      />
    </Box>
  );
}