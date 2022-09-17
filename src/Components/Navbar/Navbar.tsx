import React from "react";
import { NavMenuItemData } from "../../Assets/Data";

import Logo from "../../Assets/images/svg/logo";
import Globe from "../../Assets/images/svg/globe";
import {
  NavbarContainer,
  NavMenu,
  NavMenuItem,
  IconWrapper,
} from "../../Assets/styles/NavbarStyles";
import DownArrow from "../../Assets/images/svg/DownArrow";

const Navbar = () => {
  console.log(NavMenuItemData);

  return (
    <NavbarContainer>
      <Logo />
      <NavMenu>
        {NavMenuItemData.map((i, index) => (
          <NavMenuItem>
            {i.name}{" "}
            {i?.multi && (
              <IconWrapper>
                <DownArrow />
              </IconWrapper>
            )}
          </NavMenuItem>
        ))}
        <NavMenuItem>
          <Globe />
          <IconWrapper>
            <DownArrow />
          </IconWrapper>
        </NavMenuItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
