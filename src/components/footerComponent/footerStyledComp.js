import styled from "styled-components";

export const FooterContainer = styled.section`
  padding: 1rem 0;
  margin-top: 4rem;
  background-color: #fafafa;
`;
export const FooterInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
    /* border: 1px solid red; */
  }
`;
export const FooterSocailOuterContainer = styled.div`
  background-color: black;
  padding: 1rem;
`;
export const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
export const FooterSocialIcon = styled.i`
  color: green;
`;
