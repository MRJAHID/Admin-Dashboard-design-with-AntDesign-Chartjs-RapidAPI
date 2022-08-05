import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

const INITIAL_STATE = {
   darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
         {children}
      </DarkModeContext.Provider>
   );
};
