import { createContext, Dispatch, FC, useReducer } from "react";
import { AppActions } from "./ActionTypes";
import { appReducer } from "./appReducer";
import { AppState, initialState } from "./AppState";

export const AppContext = createContext<{ state: AppState; dispatch: Dispatch<AppActions> }>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
