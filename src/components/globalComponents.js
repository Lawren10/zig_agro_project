import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: gray;
  padding: 0.5rem;
  text-decoration: none;
`;

export const TopNavText = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
`;

export const SectionBody = styled.section`
  padding: 0.5rem 4rem;
`;

export const Box = styled.div`
  padding: 0.5rem 1rem;
  background-color: white;
  box-shadow: 0px 1px 0.5px 0.5px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
`;
