import { Box, Text, ResultText, Button, Icon, Link } from "@my-page/design-system";
import { ExploreTemplates, TemplatesList } from "./features";
import { WithModal } from "../../hoc/with-modal.hoc";

export const Templates = WithModal(() => {
  return (
    <Box>
      <Text variant="h5" mt={2}>
        Templates
      </Text>
      <Text variant="body1" my={2}>
        Explore many template categories that correspond to your business.
      </Text>

      <ExploreTemplates />
      
      <Box sx={{
        mt: 6,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <ResultText result={10} />

        <Button 
          color='secondary' 
          variant="contained"
          component={Link}
          href='/build-custom-template'
          endIcon={(
            <Icon
              fontSize="medium"
            >
              construction
            </Icon>
          )}
        >
          Build Custom Template
        </Button>
      </Box>

      <TemplatesList />

    </Box>
  )
});