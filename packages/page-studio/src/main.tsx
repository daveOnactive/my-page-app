import React from 'react';
import ReactDOM from 'react-dom/client';
import { DesignSystemProvider } from '@my-page/design-system';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { router } from './router.tsx';
import { PageContainer } from './layouts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DesignSystemProvider>
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </DesignSystemProvider>
  </React.StrictMode>,
)
