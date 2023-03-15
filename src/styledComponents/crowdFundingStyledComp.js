import styled from "styled-components";

/////////////////////////////

export const FundingHeroTextContainer = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

export const CrowdFundingItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  @media (max-width: 550px) {
    /* border: 1px solid red; */
    justify-content: center;
    flex-direction: column;
  }
`;

export const CrowdFundingItemCard = styled.div`
  width: 33.3%;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 550px) {
    width: 100%;
  }
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
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const BenefitCardIcon = styled.img`
  width: 8rem;
  /* margin-bottom: 2rem; */
  /* display: inline-block; */
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
