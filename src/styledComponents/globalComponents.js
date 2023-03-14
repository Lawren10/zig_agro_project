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
  font-size: 0.7rem;
`;

export const Logo = styled.img`
  width: 5rem;
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

// slider styles
export const SliderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background: linear-gradient(to top, rgba(125, 255, 177, 1), transparent);
  position: relative;
`;

export const SliderIMage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const SliderTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent); ;
`;

export const SliderHeroText = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: white;
  font-weight: 800;
  text-shadow: 1px 1px rgba(0, 0, 0, 1);
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
  font-size: ${({ cart }) => (cart === "true" ? "1.2rem" : "0.8rem")};
  color: black;
  font-weight: ${({ cart }) => (cart === "true" ? "800" : "400")};
  line-height: 1.2rem;
`;

export const FooterBodyText = styled.p`
  width: 10rem;
  font-size: 0.7rem;
  color: gray;
  font-weight: 300;
  line-height: 1.5rem;
`;

export const FooterEmailText = styled.p`
  font-size: 0.7rem;
  color: green;
  font-weight: 800;
  line-height: 1.5rem;
`;
