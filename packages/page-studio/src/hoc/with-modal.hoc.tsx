import { AppModalProvider } from "../providers"

export const WithModal = (Component: () => JSX.Element) => {
  return () => (
    <AppModalProvider>
      <Component />
    </AppModalProvider>
  )
};