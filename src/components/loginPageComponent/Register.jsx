import React from "react";
import {
  RegisterContainer,
  InputItemContainer,
} from "../../styledComponents/loginPageStyledComp";

import {
  SectionBody,
  LargeLogo,
  InputText,
  InputLabel,
  AuthButton,
} from "../../styledComponents/globalComponents";

const Register = () => {
  return (
    <>
      <SectionBody>
        <RegisterContainer>
          <LargeLogo src="/images/logo.jpg" w={"10rem"} />
          <InputItemContainer size={"40%"}>
            <InputLabel for="first name">First Name</InputLabel>
            <InputText
              id="first name"
              placeholder="first name"
              // size={"100%"}
            />
          </InputItemContainer>

          <InputItemContainer size={"40%"}>
            <InputLabel for="last name">Last Name</InputLabel>
            <InputText
              id="last name"
              placeholder="last name"
              // size={"100%"}
            />
          </InputItemContainer>

          <InputItemContainer size={"40%"}>
            <InputLabel for="User name">User name</InputLabel>
            <InputText
              id="User name"
              placeholder="User name"
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
          <AuthButton>Register</AuthButton>
        </RegisterContainer>
      </SectionBody>
    </>
  );
};

export default Register;
