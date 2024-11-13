import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/app/providers/error-boundary';
import { MuiProvider } from '@/app/providers/mui/ui';

const root = createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <MuiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiProvider>
  </ErrorBoundary>,
);
