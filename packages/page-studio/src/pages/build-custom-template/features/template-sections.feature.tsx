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
        gridTemplateColumns: '1fr 1fr',
        gap: 2,
      }}
    >
    {
      [1, 2, 3, 4, 5].map(item => (
        <Paper
          key={item}
          dangerouslySetInnerHTML={
           {
            __html: `
                      <html>
                        <style>
                          body {
                            margin: 1rem;
                          }
                          nav {
                            border: 1px solid #1111;
                            width: 100%;
                            height: 30px;
                            display: block
                          }

                          .banner {
                            border: 1px solid #1111;
                            width: 100%;
                            height: 80%;
                          }

                        </style>
                        <body>
                          <nav></nav>
                          <section class='banner'></section>
                        </body>
                      </html>
                    `
           }
          }
          onClick={() => handleSectionClick(item)}
          style={{
            margin: '.5rem',
            width: '100%',
            height: 150,
            // display: 'flex',
            cursor: 'pointer',
            border: pageSection?.value === item ? '1px solid black' : ''
          }}
          variant='outlined'
        />
      ))
    }
    </Box>
  )
}

const pageSectionOptions = [
  {
    name: 'Banner'
  },
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