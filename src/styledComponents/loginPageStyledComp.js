import styled from "styled-components";

// login section styles

export const LoginContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 0;
  background-color: #fafafa;
`;

export const InputItemContainer = styled.div`
  width: ${({ size }) => (size ? size : "100%")};
  /* border: 1px solid black; */
  @media (max-width: 550px) {
    width: 90% !important;
    /* padding: 0 2rem; */
  }
`;

export const RegisterContainer = styled(LoginContainer)``;
