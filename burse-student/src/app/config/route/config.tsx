import { BaseLayout } from "../../../widgets/layout"
import { ProfilePage } from "../../../pages/profile"
import { LoginPage } from "../../../pages/login/ui"

import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  hasLayout?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
  LOGIN = "login",
  PRACTICES = "practices",
  APPLICATIONS = "applications",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "",
  [AppRoutes.PROFILE]: "profile",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.PRACTICES]: "/practices",
  [AppRoutes.APPLICATIONS]: "applications",
}

export const Config: AppRoutesProps[] = [
  // {
  //   path: RoutePaths.main,
  //   element: <Practices />,
  // },
  // {
  //   path: `${RoutePaths.practices}/:id`,
  //   element: <Practice />,
  // },
  {
    path: RoutePaths.profile,
    element: <ProfilePage />,
    hasLayout: true
  },
  // {
  //   path: RoutePaths.applications,
  //   element: <Applications />,
  //   authOnly: true,
  //   hasLayout: false,
  // },
  {
    path: RoutePaths.login,
    element: <LoginPage />,
  },
];
