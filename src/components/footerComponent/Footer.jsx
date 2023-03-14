import React from "react";
import {
  FooterContainer,
  FooterInnerContainer,
  FooterSocialContainer,
  FooterSocialIcon,
} from "./footerStyledComp";

import {
  SectionBody,
  Logo,
  Subtitle2,
  FooterLink,
  FooterBodyText,
  FooterEmailText,
} from "../../styledComponents/globalComponents";

import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SectionBody>
          <FooterInnerContainer>
            <Logo src="/images/logo.jpg" />
            <div>
              <FooterBodyText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              </FooterBodyText>
              <FooterEmailText>info@zig-agro.com</FooterEmailText>
              <Subtitle2>+234 (0) 706 796 3016</Subtitle2>
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
              <Subtitle2>Follow Us</Subtitle2>
              <FooterSocialContainer>
                <FooterSocialIcon>
                  <BsFacebook />
                </FooterSocialIcon>
                <FooterSocialIcon>
                  <AiFillTwitterCircle />
                </FooterSocialIcon>
                <FooterSocialIcon>
                  <AiFillInstagram />
                </FooterSocialIcon>
                <FooterSocialIcon>
                  <AiFillYoutube />
                </FooterSocialIcon>
              </FooterSocialContainer>
              <FooterBodyText>
                copyright @ Farmcrowdy. all rights reserved.
              </FooterBodyText>
            </div>
          </FooterInnerContainer>
        </SectionBody>
      </FooterContainer>
    </>
  );
};

export default Footer;
