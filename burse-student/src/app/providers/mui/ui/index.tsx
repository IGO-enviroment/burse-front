import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

export function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={undefined}>{children}</ThemeProvider>
    </>
  );
}
