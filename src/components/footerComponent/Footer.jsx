import React from "react";
import {
  FooterContainer,
  FooterInnerContainer,
  FooterSocailOuterContainer,
  FooterSocialContainer,
  FooterSocialIcon,
} from "./footerStyledComp";

import {
  SectionBody,
  Logo,
  Subtitle2,
  Subtitle1,
  FooterLink,
  FooterText,
} from "../../styledComponents/globalComponents";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SectionBody>
          <FooterInnerContainer>
            <div>
              <Logo />
              <Subtitle2>+234 (0) 706 796 3016</Subtitle2>
              <FooterSocialContainer>
                <FooterSocialIcon />
                <FooterSocialIcon />
                <FooterSocialIcon />
                <FooterSocialIcon />
              </FooterSocialContainer>
            </div>
            <div>
              <Subtitle2>Navigation</Subtitle2>
              <FooterLink>ZigAgro link</FooterLink>
              <FooterLink>ZigAgro link</FooterLink>
              <FooterLink>ZigAgro link</FooterLink>
              <FooterLink>ZigAgro link</FooterLink>
            </div>
            <div>
              <Subtitle2>Discover</Subtitle2>
              <FooterLink>ZigAgro link</FooterLink>
              <FooterLink>ZigAgro link</FooterLink>
              <FooterLink>ZigAgro link</FooterLink>
              <FooterLink>ZigAgro link</FooterLink>
            </div>
            <div>
              <Subtitle1>Get fresh food produce</Subtitle1>
            </div>
          </FooterInnerContainer>
        </SectionBody>
        <FooterSocailOuterContainer>
          <SectionBody>
            <FooterInnerContainer>
              <FooterSocialContainer>
                <FooterSocialIcon />
                <FooterSocialIcon />
                <FooterSocialIcon />
                <FooterSocialIcon />
              </FooterSocialContainer>
              <FooterText>2023 All Rights Reserved</FooterText>
            </FooterInnerContainer>
          </SectionBody>
        </FooterSocailOuterContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
