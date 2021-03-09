import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";

const useHideMenu = (hide) => {
  const { hidenMenu, showMenu } = useContext(UiContext);
  useEffect(() => {
    hide ? hidenMenu() : showMenu();
  }, [hide, hidenMenu, showMenu]);
};

export default useHideMenu;
