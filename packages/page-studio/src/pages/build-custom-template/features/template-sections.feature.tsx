import { Accordion, Box, Paper, IconButton, Icon, Text, Autocomplete } from "@my-page/design-system";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { templateSection } from "../../../store";


type SectionsProps = {
  name: string;
}

const Sections = (props: SectionsProps) => {
  const [selected, setSelected] = useState(0);
  const [section, setSection] = useRecoilState(templateSection);

  const handleSectionClick = (item: number) => {
    setSelected(item);
    setSection({
      ...section,
      [props.name]: item
    });
  }

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
            border: selected === item ? '1px solid black' : ''
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

  const [sections, setSections] = useState([
    'Banner'
  ]);

  const [section, setSection] = useRecoilState(templateSection);

  const [options, setOptions] = useState(pageSectionOptions);

  const onRemoveSection = (name: string) => {
    setSections((prev) => prev.filter(item => item !== name));
    setOptions((prev) => [...prev, { name }]);
    const clonedSection = {
      ...section
    } as any;

    delete clonedSection[name.toLowerCase()];
    setSection(clonedSection);
  }

  return (
    <Box my={4} mx={2}>
      <Accordion
        data={[
          ...sections?.map(item => {
            return {
              details: <Sections name={item.toLowerCase()} />,
              summary: (
                <Box display='flex' justifyContent='space-between' width='100%' alignItems='center'>
                  <Text>{item}</Text>
                  <IconButton onClick={() => onRemoveSection(item)}>
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
            setSections((prev) => [...prev, newValue?.name]);
            setOptions((prev) => prev.filter(item => item.name !== newValue?.name));
          }
        }}
      />
    </Box>
  );
};