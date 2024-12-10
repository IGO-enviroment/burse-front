import { Provider } from "react-redux"
import { ReactNode } from "react"
import { createReduxStore } from "../config/store"

interface Props {
    children: ReactNode,
}

export const StoreProvider = ({ children }: Props) => {
  const store = createReduxStore();
  return <Provider store={store}>{children}</Provider>;
};
