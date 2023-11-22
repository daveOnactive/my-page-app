import { FC } from 'react';
import { NavigationBar, Container } from '@my-page/design-system';

export const PageContainer: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
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
      <Container
        maxWidth="xl"
        sx={{
          mt: {
            lg: 12,
            xs: 10
          },
          pl: '16px !important'
        }}>
        {children}
      </Container>
    </>
  );
}