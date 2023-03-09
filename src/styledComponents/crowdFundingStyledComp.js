import styled from "styled-components";

export const FundingHeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background: linear-gradient(to top, rgba(125, 255, 177, 1), transparent);
`;

export const FundingHeroTextContainer = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

export const FundingHeroText = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: white;
  font-weight: 800;
`;

export const CrowdFundingItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

export const CrowdFundingItemCard = styled.div`
  width: 33.3%;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const CrowdFundingItemImage = styled.img`
  width: 100%;
  height: 12rem;
  background-color: lightgray;
`;

export const CrowdFundingItemButton = styled.button`
  border: none;
  outline: none;
  background-color: green;
  color: white;
  padding: 1.2rem 4rem;
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;

export const BenefitCard = styled.div`
  width: 33.3%;
  text-align: center;
  margin-top: 3rem;
`;

export const BenefitCardIcon = styled.i`
  padding: 2.5rem;
  background-color: gray;
  margin-bottom: 2rem;
  display: inline-block;
`;

export const PioneerSectionContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
`;
export const PioneerSectionButton = styled.button`
  border: 1px solid green;
  outline: none;
  background-color: white;
  color: green;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
  cursor: pointer;
`;
