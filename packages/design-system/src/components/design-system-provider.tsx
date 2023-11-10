import { createContext } from 'react';
import { ThemeProvider} from '@mui/material';
import { theme } from '../themes/index';

const DesignSystemContext = createContext({});

export const DesignSystemProvider = ({children}: { children: React.ReactNode}) => {
  return (
    <DesignSystemContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </DesignSystemContext.Provider>
  )
}