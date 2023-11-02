import type { Preview, ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/themes"; 

// Load Material UI fonts
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import "@fontsource/material-icons";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
  withThemeFromJSXProvider<ReactRenderer>({
    themes: {
     light: theme,
     },
     defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
   }),
 ],
};

export default preview;
