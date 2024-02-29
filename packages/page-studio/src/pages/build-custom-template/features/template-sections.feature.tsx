import { Accordion, Box, Paper, IconButton, Icon, Text, Autocomplete } from "@my-page/design-system";
// import { useState, useMemo } from "react";
// import { useCustomTemplateState } from '../hooks';

export const TemplateSections = () => {

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
          // onClick={() => handleSectionClick(item)}
          style={{
            margin: '.5rem',
            width: '100%',
            height: 150,
            // display: 'flex',
            cursor: 'pointer',
          }}
          variant='outlined'
        />
      ))
    }
    </Box>
  );
};