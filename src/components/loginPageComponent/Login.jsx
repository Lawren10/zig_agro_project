import React from "react";
import {
  LoginContainer,
  InputItemContainer,
} from "../../styledComponents/loginPageStyledComp";
import {
  SectionBody,
  LargeLogo,
  InputText,
  InputLabel,
  AuthButton,
} from "../../styledComponents/globalComponents";

const Login = () => {
  return (
    <>
      <SectionBody>
        <LoginContainer>
          <LargeLogo src="/images/logo.jpg" w={"10rem"} />
          <InputItemContainer size={"40%"}>
            <InputLabel for="email">Email or user name</InputLabel>
            <InputText
              id="email"
              placeholder="Email or user name"
              // size={"100%"}
            />
          </InputItemContainer>

          <InputItemContainer size={"40%"}>
            <InputLabel for="password">Password</InputLabel>
            <InputText
              id="password"
              placeholder="provide your password"
              // size={"100%"}
            />
          </InputItemContainer>
          <AuthButton>Login</AuthButton>
        </LoginContainer>
      </SectionBody>
    </>
  );
};

export default Login;
