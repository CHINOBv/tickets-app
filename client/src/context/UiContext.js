import { createContext, useState } from "react";

export const UiContext = createContext();

const UiContextProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(false);
  const showMenu = () => setHideMenu(false);
  const hidenMenu = () => setHideMenu(true);
  return (
    <>
      <UiContext.Provider
        value={{
          hideMenu,
          showMenu,
          hidenMenu,
        }}
      >
        {children}
      </UiContext.Provider>
    </>
  );
};

export default UiContextProvider;
