///////////////////////////////////////////

import styled from "styled-components";

export const FeaturesContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem 0 1rem;
`;

export const FeatureItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 15rem;
`;
export const FeatureItemPic = styled.div`
  padding: 2rem;
  background-color: lightgray;
  border-radius: 0.5rem;
`;

export const FeatureItemText = styled.h3`
  color: gray;
  font-size: 0.8rem;
`;

// product card component styles

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 3rem;
`;

export const ProductCard = styled.div`
  width: 30%;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
  }
`;
export const CardWrapper = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

export const ProductCardImg = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
  background-color: gray;
`;
export const CardHeader = styled.div`
  padding: 0 1rem;
  border-bottom: 1px solid lightgray;
`;
export const CardHeaderText = styled.h3`
  color: green;
  font-weight: 800;
  font-size: 1rem;
  line-height: 0.5rem;
`;
export const CardHeaderTextSec = styled.span`
  color: green;
  font-weight: 200;
  font-size: 1rem;
  font-style: italic;
`;
export const ProductCardBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: -1rem;
`;

export const ProductPrice = styled.h4`
  font-weight: 800;
  color: gray;
  font-size: 1rem;
  line-height: 0.3rem;
`;

export const CardTittleText = styled.h6`
  font-weight: 400;
  text-transform: uppercase;
  color: gray;
  font-size: 0.7rem;
  line-height: 0.01rem;
  text-align: ${({ align }) => (align === "end" ? "end" : "start")};
`;
export const CardBodyText = styled.p`
  font-weight: 300;
  color: gray;
  font-size: 0.8rem;
  line-height: 0.5rem;
  text-align: ${({ align }) => (align === "end" ? "end" : "start")};
`;

export const ProductButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ProductButton = styled.button`
  font-weight: 500;
  color: white;
  font-size: 0.7rem;
  border: none;
  background-color: green;
  padding: 0.5rem 0.9rem;
  border-radius: 2rem;
  cursor: pointer;
`;

export const ProductButtonOutlined = styled(ProductButton)`
  border: 1px solid green;
  background-color: white;
  color: green;
  cursor: pointer;
`;

export const PillButton = styled.span`
  font-weight: 500;
  color: white;
  font-size: 0.8rem;
  border: none;
  background-color: green;
  padding: 0.5rem 0.9rem;
  border-radius: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

// Value proposition section styles
export const ValueSectionContainer = styled.div`
  padding: 6rem 3rem 2rem 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 8rem;
  background: linear-gradient(
    to top,
    rgba(125, 255, 177, 0.3),
    transparent,
    transparent,
    transparent
  );
`;

export const ValueSectionInnerContainerLeft = styled.div`
  width: 40%;
`;
export const ValueSectionInnerContainerRight = styled.div`
  width: 60%;
`;

export const ValueItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
export const ValueItemIcon = styled.i`
  padding: 1rem;
  background-color: gray;
`;

// security and partnership styles

export const PartnershipContainer = styled.div`
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
