import * as React from 'react';
import MuiList from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

type IProps = {
  listItem: React.ReactNode[];
}

export function List({ listItem }: IProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <MuiList aria-label="List">
      {
        listItem.map((item, index) => (
          <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            key={index}
          >
            {item}
          </ListItemButton>
        ))
      }
    </MuiList>
  );
}
