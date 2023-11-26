import { FC, useContext } from 'react';
import { NavigationBar, Container } from '@my-page/design-system';

import { AppNavigationContext } from '../../providers';

export const PageContainer: FC<React.PropsWithChildren> = ({ children }) => {

  const { showNav } = useContext(AppNavigationContext);

  return (
    <>
      {
        showNav ? (
          <NavigationBar
            pages={[
              {
                name: 'Dashboard',
                link: '/'
              },
              {
                name: 'Template',
                link: '/templates'
              },
            ]}
            profile={{}}
            isLoggedIn={false}
            settings={[]}
          />
        ) : null
      }
      <Container
        maxWidth="xl"
        sx={{
          mt: {
            lg: showNav ? 12 : 2,
            xs: showNav ? 10 : 2,
          },
          pl: '16px !important'
        }}>
        {children}
      </Container>
    </>
  );
}