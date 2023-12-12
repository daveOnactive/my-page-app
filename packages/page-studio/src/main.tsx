import React from 'react';
import ReactDOM from 'react-dom/client';
import { DesignSystemProvider } from '@my-page/design-system';
import {
  RouterProvider,
} from "react-router-dom";
import {
  RecoilRoot,
} from 'recoil';
import './index.css';
import { router } from './router.tsx';
import { PageContainer } from './layouts';
import { AppNavigationProvider } from './providers/app-navigation.provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DesignSystemProvider>
      <AppNavigationProvider>
        <PageContainer>
          <RecoilRoot>
            <RouterProvider router={router} />
          </RecoilRoot>
        </PageContainer>
      </AppNavigationProvider>
    </DesignSystemProvider>
  </React.StrictMode>,
)
