import { useLocation, useNavigate } from "react-router-dom"
import { DashboardLayout, AppProvider, Navigation, Branding, Router } from "@toolpad/core"
import { RoutePaths } from "../../app/config/route/config"
import { FC, ReactNode, useMemo } from 'react'
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded"
import CasesRoundedIcon from "@mui/icons-material/CasesRounded"
import { Box, ThemeProvider } from "@mui/material"
import { theme } from "../../shared/mui"

const NAVIGATION: Navigation = [
  {
    segment: RoutePaths.main,
    title: "Практики",
    icon: <CasesRoundedIcon />,
  },
  {
    segment: RoutePaths.profile,
    title: "Профиль",
    icon: <AssignmentIndRoundedIcon />,
  },
  {
    segment: RoutePaths.applications,
    title: "Мои заявки",
    icon: <CasesRoundedIcon />,
  }
];

const BrandingComponent: Branding = {
  title: "IGROK",
  logo: <></>,
}

export const BaseLayout: FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate();
  const  {pathname} = useLocation();

  const router = useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: any) => navigate(String(path)),
    };
  }, [pathname, navigate]);


  return (
    <AppProvider branding={BrandingComponent} navigation={NAVIGATION} router={router}>
      <DashboardLayout>
        <ThemeProvider theme={theme}>
          <Box padding={"20px"}>
            {children}
          </Box>
        </ThemeProvider>
      </DashboardLayout>
    </AppProvider>
  );
};