import { createContext, useContext, useReducer } from "react";
import { Reducer } from "./Reducer";

export const Context = createContext({});

export const useAppContext = () => useContext(Context);

export const AppContext = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
