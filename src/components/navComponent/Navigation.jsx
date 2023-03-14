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
import { SlBag } from "react-icons/sl";

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
          <NavLogo src="/images/logo.jpg" />
          <BottomNavInnerContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/crowdfunding">Crowdfunding</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink>Special Request</NavLink>
            <NavLink>About us</NavLink>
            <NavLink>Contact</NavLink>
          </BottomNavInnerContainer>
          <CartBox>
            <SlBag />
          </CartBox>
        </BottomNavContainer>
      </NavContainer>
    </>
  );
};

export default Navigation;
