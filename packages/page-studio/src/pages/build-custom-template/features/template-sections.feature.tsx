import { Accordion, Box, Paper, IconButton, Icon, Text, Autocomplete } from "@my-page/design-system";
import { useState, useMemo } from "react";
import { useCustomTemplateState } from '../hooks';


type SectionsProps = {
  name: string;
}

const Sections = (props: SectionsProps) => {

  const { sections } = useCustomTemplateState();

  const [section, setSection ] = sections;

  const handleSectionClick = (value: number) => {
    const clonedSection = [...section].map(item => {
      if(item.name === props.name) {
        return {
          name: item.name,
          value
        }
      }
      return item;
    });
    setSection(clonedSection);
  }

  const pageSection = useMemo(() => section.find((item) => item.name === props.name), [section]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 2,
      }}
    >
    {
      [1, 2, 3, 4, 5].map(item => (
        <Paper
          key={item}
          onClick={() => handleSectionClick(item)}
          sx={{
            width: 150,
            height: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            border: pageSection?.value === item ? '1px solid black' : ''
          }}
          variant='outlined'
        ></Paper>
      ))
    }
    </Box>
  )
}

const pageSectionOptions = [
  {
    name: 'Services / What we do'
  },
  {
    name: 'About us'
  },
  {
    name: 'Contact us'
  },
  {
    name: 'Footer'
  }
]

export const TemplateSections = () => {

  const { sections } = useCustomTemplateState();

  const [section, setSection ] = sections;

  const [options, setOptions] = useState(pageSectionOptions);

  const onRemoveSection = (name: string) => {
    setOptions((prev) => [...prev, { name }]);
    const clonedSection = [...section].filter((item) => item.name !== name);
    setSection(clonedSection);
  }

  const onAddSection = (name: string) => {
    setOptions((prev) => prev.filter(item => item.name !== name));
    const clonedSection = [...section, { name }];
    setSection(clonedSection);
  }

  return (
    <Box my={4} mx={2}>
      <Accordion
        data={[
          ...section?.map(item => {
            return {
              details: <Sections name={item.name} />,
              summary: (
                <Box display='flex' justifyContent='space-between' width='100%' alignItems='center'>
                  <Text>{item.name}</Text>
                  <IconButton onClick={() => onRemoveSection(item.name)}>
                    <Icon>delete</Icon>
                  </IconButton>
                </Box>
              ),
            }
          })
        ]}
      />
      <Autocomplete
        options={options}
        label="Add Page Section"
        getOptionLabel={(option) => option?.name}
        sx={{
          mt: 3
        }}
        onChange={(_, newValue) => {
          if(newValue) {
            onAddSection(newValue?.name);
          }
        }}
      />
    </Box>
  );
};