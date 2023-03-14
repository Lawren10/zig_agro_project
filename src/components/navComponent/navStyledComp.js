import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const TopNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 0.2rem 4rem;
`;

export const TopNavInnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const BottomNavContainer = styled(TopNavContainer)`
  background-color: white;
  padding: 0rem 4rem;
`;

export const NavLogo = styled.img`
  width: 5rem;
`;

export const BottomNavInnerContainer = styled(TopNavInnerContainer)``;

export const CartBox = styled.div`
  padding: .5rem
  color:black;
  font-size:1.8rem;
  font-weight:500;
`;
