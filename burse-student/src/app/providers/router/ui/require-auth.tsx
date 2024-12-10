import { useLocation, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { FC, ReactNode } from "react";

interface RequireAuthProps {
  children: ReactNode;
  isAuth: boolean;
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {

  // if (!auth) {
  //   return <Navigate to={RoutePaths.login} state={{ from: location }} replace />
  // }

  return props.children;
}
