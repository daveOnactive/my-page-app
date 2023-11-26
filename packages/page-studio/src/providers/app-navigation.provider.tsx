import { createContext, useState, PropsWithChildren, FC } from 'react';

export const AppNavigationContext = createContext({
  showNav: true,
  handleShowNav: () => {},
  handleHideNav: () => {},
})

export const AppNavigationProvider: FC<PropsWithChildren> = ({ children }) => {

  const [showNav, setShowNav] = useState(true);

  const handleShowNav = () => {
    setShowNav(true);
  }

  const handleHideNav = () => {
    setShowNav(false);
  }
  
  return (
    <AppNavigationContext.Provider
      value={{
        showNav,
        handleShowNav,
        handleHideNav
      }}
    >
      {children}
    </AppNavigationContext.Provider>
  )
}