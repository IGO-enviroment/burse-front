import { createTheme } from '@mui/material';
import { PaletteOptions } from './theme/pallet-options';
import { TypographyOptions } from './theme/typography-options';
import { Components } from './theme/components';

export const theme = createTheme({
  palette: PaletteOptions,
  typography: TypographyOptions,
  components: Components,
});
