import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../lib/theme';

export function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
