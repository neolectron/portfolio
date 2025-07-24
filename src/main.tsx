import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // oxlint-disable-line no-unassigned-import
import { App } from './App';

const rootElement = document.querySelector('#root');

if (rootElement === null) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
