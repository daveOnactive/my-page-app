import { List, Box, Text, IconButton, Icon, Autocomplete } from '@my-page/design-system';
import { useState } from 'react';
import { useCustomTemplateState } from '../hooks';

type ListItemProps = {
  title: string;
  onRemoveList: (name: string) => void;
}

const ListItem = ({ title, onRemoveList }: ListItemProps) => {
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
      <IconButton onClick={() => onRemoveList(title)}>
        <Icon>
          delete
        </Icon>
      </IconButton>
    </Box>
  )
}

const pageOptions = [
  {
    name: 'About us'
  },
  {
    name: 'Services'
  },
  {
    name: 'Contact us'
  },
  {
    name: 'Pricing'
  }
];

export const TemplatePages = () => {
  const [options, setOptions] = useState(pageOptions);

  const { pages: pagesStore } = useCustomTemplateState();

  const [pages, setPages] = pagesStore;

  const onRemovePage = (name: string) => {
    setOptions((prev) => [...prev, { name }]);

    const clonedPages = [...pages].filter(item => item.name !== name);

    setPages(clonedPages);
  }

  const onAddPage = (newValue: { name: string }) => {
    setOptions((prev) => prev.filter(item => item.name !== newValue?.name));

    const clonedPages = [...pages, newValue];

    setPages(clonedPages);
  }

  return (
    <Box p={2}>
      <List
        listItem={
          [
            ...pages.map((page) => {
              return (
                <ListItem
                  title={page.name}
                  onRemoveList={onRemovePage}
                />
              );
            })
          ]
        }
      />
      <Autocomplete
        options={options}
        label="Add Pages"
        getOptionLabel={(option) => option?.name}
        sx={{
          mt: 3
        }}
        onChange={(_, newValue) => {
          if(newValue) {
            onAddPage(newValue);
          }
        }}
      />
    </Box>
  );
};