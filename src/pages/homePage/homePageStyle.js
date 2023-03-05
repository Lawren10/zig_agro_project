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
  font-size: 0.9rem;
`;
