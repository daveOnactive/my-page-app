import { List, Box, Text, IconButton, Icon, Autocomplete } from '@my-page/design-system';
import { useState } from 'react';
import { useRecoilState } from "recoil";
import { templatePages } from "../../../store";

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

  const [pagesStore, setPagesStore] = useRecoilState(templatePages);

  const [pages, setPages] = useState<any[]>([]);

  const onRemovePage = (name: string) => {
    setPages((prev) => prev.filter(item => item !== name));
    setOptions((prev) => [...prev, { name }]);

    const clonedPages = {
      ...pagesStore
    } as any;

    delete clonedPages[name.toLowerCase()];
    setPagesStore(clonedPages);
  }

  return (
    <Box p={2}>
      <List
        listItem={
          [
            ...pages.map((page) => {
              return (
                <ListItem 
                  title={page}
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
            setPages((prev) => [
              ...prev, 
              newValue?.name
            ]);

            setOptions((prev) => prev.filter(item => item.name !== newValue?.name));

            setPagesStore({
              ...pagesStore,
              [newValue.name]: '',
            });
          }
        }}
      />
    </Box>
  );
};