import { useState } from "react";
import { Redirect } from "react-router-dom";
import FormAccess from "../components/FormAccess";
import { getUserStorage } from "../helpers/getUserStorage";
import useHideMenu from "../hooks/useHideMenu";

const Access = () => {
  const [user] = useState(() => getUserStorage());
  useHideMenu(false);
  if (user.agent && user.desktop) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <FormAccess />
    </>
  );
};

export default Access;
