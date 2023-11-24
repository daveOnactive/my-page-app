import React from 'react';
import ReactDOM from 'react-dom/client';
import { DesignSystemProvider } from '@my-page/design-system';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { router } from './router.tsx';
import { PageContainer } from './layouts';
import { AppModalProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DesignSystemProvider>
      <PageContainer>
        <AppModalProvider>
          <RouterProvider router={router} />
        </AppModalProvider>
      </PageContainer>
    </DesignSystemProvider>
  </React.StrictMode>,
)
