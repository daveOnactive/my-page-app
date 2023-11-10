import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { DesignSystemProvider } from '@my-page/design-system';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DesignSystemProvider>
      <App />
    </DesignSystemProvider>
  </React.StrictMode>,
)
