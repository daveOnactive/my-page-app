import { List, Box, Text, IconButton, Icon } from '@my-page/design-system';

const ListItem = ({ title }: { title: string }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }}>
      <Text>
        {title}
      </Text>
      <IconButton>
        <Icon>
          delete
        </Icon>
      </IconButton>
    </Box>
  )
}

export const TemplatePages = () => {
  return (
    <Box p={2}>
      <List
        listItem={
          [
            <ListItem title='About Us' />,
            <ListItem title='Services' />,
            <ListItem title='Contacts' />,
            <ListItem title='Pricing' />,
          ]
        }
      />
    </Box>
  );
};