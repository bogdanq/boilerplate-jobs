import React, { ReactNode, useReducer, ComponentType, Dispatch } from "react";
import { MenuItem } from "../../ui";

type Fields = "div" | "span";
type ToggleProps = {
  as: Fields | ComponentType<any>;
  menu: (args: { close: Dispatch<void> }) => ReactNode;
};
export const ToggleMenu = ({ as: TagName, menu }: ToggleProps) => {
  const [opened, toggle] = useReducer(prev => !prev, false);

  return (
    <>
      <MenuItem as={TagName} img="sign-in" name="Профиль" onClick={toggle} />
      {opened && menu({ close: toggle })}
    </>
  );
};
