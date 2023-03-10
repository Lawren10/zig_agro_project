import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: gray;
  padding: 0.5rem;
  text-decoration: none;
`;

export const FooterLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 0;
`;

export const Logo = styled.img`
  background-color: green;
  padding: 1rem;
`;

export const TopNavText = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
`;

export const FooterText = styled(TopNavText)`
  font-size: 1rem;
`;

export const SectionBody = styled.section`
  padding: 0.5rem 4rem;
`;

export const Box = styled.div`
  padding: 0.5rem 1rem;
  background-color: white;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => (gap ? gap : "0")};
`;

export const Header1 = styled.h1`
  font-size: 2rem;
  color: black;
  font-weight: 500;
`;

export const Header2 = styled.h2`
  font-size: 1.2rem;
  color: darkgreen;
  font-weight: 600;
`;

export const Subtitle1 = styled.h3`
  font-size: 1.5rem;
  color: ${({ bold }) => (bold === "true" ? "black" : "gray")};
  font-weight: ${({ bold }) => (bold === "true" ? "700" : "500")};
`;
export const Subtitle2 = styled.h4`
  font-size: ${({ bold }) => (bold === "true" ? "1.5rem" : "0.9rem")};
  color: ${({ bold }) => (bold === "true" ? "black" : "gray")};
  font-weight: 800;
`;

export const Subtitle3 = styled.h3`
  font-size: ${({ large }) => (large === "true" ? "2.5rem" : "1rem")};
  color: green;
  font-weight: 200;
`;

export const Subtitle4 = styled.h3`
  font-size: 0.9rem;
  color: gray;
  font-weight: 200;
`;

export const Subtitle5 = styled.h3`
  font-size: 1.5rem;
  color: green;
  font-weight: 100;
`;

export const Body1 = styled.p`
  font-size: 0.85rem;
  color: gray;
  font-weight: 500;
  line-height: 1.4rem;
`;
export const Body2 = styled.p`
  font-size: 0.8rem;
  color: gray;
  font-weight: 400;
  line-height: ${({ lineSpacing }) =>
    lineSpacing === "true" ? "2rem" : "1.2rem"};
`;

export const Body3 = styled.p`
  font-size: ${({ large }) => (large === "true" ? "1.2rem" : "0.9rem")};
  color: gray;
  font-weight: 300;
  line-height: 1.5rem;
`;

export const Body4 = styled.p`
  font-size: 0.8rem;
  color: black;
  font-weight: 400;
  line-height: 1.2rem;
`;
