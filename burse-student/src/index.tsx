import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/app/providers/error-boundary';

const root = createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
);
