import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
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
  padding: 0.5rem 4rem;
`;

export const NavLogo = styled.div`
  background-color: green;
  padding: 1rem;
`;

export const BottomNavInnerContainer = styled(TopNavInnerContainer)``;

export const CartBox = styled.div`
  padding: 1rem;
  background-color: gray;
`;
