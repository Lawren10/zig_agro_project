import styled from "styled-components";

export const HomeSlider = styled.section`
  width: 100%;
  height: 80vh;
  background-color: lightgray;
  border-bottom: 2px solid green;
`;

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
  border-raduis: 0.5rem;
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
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ProductCard = styled.div`
  width: 32%;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;
export const ProductCardImg = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  background-color: gray;
`;
export const CardHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;
export const cardHeaderText = styled.h3`
  color: green;
  font-weight: 500;
  font-size: 0.8rem;
`;
export const cardHeaderTextSec = styled.span`
  color: green;
  font-weight: 200;
  font-size: 0.8rem;
  font-style: italic;
`;
export const ProductCardBody = styled.div`
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPrice = styled.h4`
  font-weight: 700;
  color: gray;
  font-size: 1.1rem;
`;

export const CardTittleText = styled.h6`
  font-weight: 300;
  text-transform: uppercase;
  color: gray;
  font-size: 0.8rem;
`;
export const CardBodyText = styled.p`
  font-weight: 200;
  color: gray;
  font-size: 0.9rem;
`;

export const ProductButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductButton = styled.button`
  font-weight: 500;
  color: white;
  font-size: 0.7rem;
  border: none;
  background-color: green;
  padding: 0.5rem 0.9rem;
  border-radius: 2rem;
`;

export const ProductButtonOutlined = styled(ProductButton)`
  border: 1 px solid green;
  background-color: white;
  color: green;
`;
