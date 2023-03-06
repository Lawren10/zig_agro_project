import React from "react";
import {
  NavContainer,
  TopNavContainer,
  TopNavInnerContainer,
  BottomNavContainer,
  NavLogo,
  BottomNavInnerContainer,
  CartBox,
} from "./navStyledComp";

import { NavLink, TopNavText } from "../../styledComponents/globalComponents";

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <TopNavContainer>
          <TopNavText>Email: info@zigagro.com</TopNavText>
          <TopNavInnerContainer>
            <TopNavText>Work with us</TopNavText>
            <TopNavText>Contact us</TopNavText>
          </TopNavInnerContainer>
        </TopNavContainer>
        <BottomNavContainer>
          <NavLogo />
          <BottomNavInnerContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink>Crowdfunding</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink>Special Request</NavLink>
            <NavLink>About us</NavLink>
            <NavLink>Contact</NavLink>
          </BottomNavInnerContainer>
          <CartBox />
        </BottomNavContainer>
      </NavContainer>
    </>
  );
};

export default Navigation;
