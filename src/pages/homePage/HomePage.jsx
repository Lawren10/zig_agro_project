import React from "react";
import {
  CrowdFundingItemContainer,
  CrowdFundingItemCard,
  CrowdFundingItemImage,
  CrowdFundingItemButton,
  FundingHeroTextContainer,
  BenefitCard,
  BenefitCardIcon,
  PioneerSectionContainer,
  PioneerSectionButton,
} from "../../styledComponents/homePageStyledComp";

import {
  Subtitle4,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  SectionBody,
  Body3,
  Subtitle5,
  SliderTextContainer,
  SliderHeroText,
} from "../../styledComponents/globalComponents";

import Slider from "../../components/sliderComponent/Slider";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <Slider>
        <SliderTextContainer>
          <SliderHeroText>
            Digitizing the Food Supply Chain In Africa
          </SliderHeroText>
        </SliderTextContainer>
      </Slider>
      {/* crowd funding product section */}
      <SectionBody>
        <FundingHeroTextContainer>
          <Subtitle4>HOW WE SUPPORT SMALL HOLDER FARMERS</Subtitle4>
          <Subtitle1 bold={"true"}>OUR PRODUCTS:</Subtitle1>
        </FundingHeroTextContainer>

        <SectionBody>
          <CrowdFundingItemContainer>
            <CrowdFundingItemCard>
              <CrowdFundingItemImage />
              <Subtitle2>FResho Social Commerce</Subtitle2>
              <Body3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                modi, ipsa architecto doloribus voluptatibus vero mollitia quod
                nesciunt aliquid rerum, corrupti explicabo nostrum, ad cumque
                vel eveniet maiores beatae neque?
              </Body3>
              <CrowdFundingItemButton>Start earning</CrowdFundingItemButton>
            </CrowdFundingItemCard>

            <CrowdFundingItemCard>
              <CrowdFundingItemImage />
              <Subtitle2>FResho Social Commerce</Subtitle2>
              <Body3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                modi, ipsa architecto doloribus voluptatibus vero mollitia quod
                nesciunt aliquid rerum, corrupti explicabo nostrum, ad cumque
                vel eveniet maiores beatae neque?
              </Body3>
              <CrowdFundingItemButton>Start earning</CrowdFundingItemButton>
            </CrowdFundingItemCard>

            <CrowdFundingItemCard>
              <CrowdFundingItemImage />
              <Subtitle2>FResho Social Commerce</Subtitle2>
              <Body3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                modi, ipsa architecto doloribus voluptatibus vero mollitia quod
                nesciunt aliquid rerum, corrupti explicabo nostrum, ad cumque
                vel eveniet maiores beatae neque?
              </Body3>
              <CrowdFundingItemButton>Start earning</CrowdFundingItemButton>
            </CrowdFundingItemCard>
          </CrowdFundingItemContainer>
        </SectionBody>

        {/* crowd funding benefits section */}

        <FundingHeroTextContainer>
          <Subtitle3 large={"true"}>What's in it for you?</Subtitle3>
        </FundingHeroTextContainer>
        <SectionBody>
          <CrowdFundingItemContainer>
            <BenefitCard>
              <BenefitCardIcon src="/images/connect.jpg" />
              <Subtitle5>Connect with our Farmers</Subtitle5>
              <Body3 large={"true"}>
                We provide you with an opportunity to directly affect lives of
                farmers
              </Body3>
            </BenefitCard>

            <BenefitCard>
              <BenefitCardIcon src="/images/fruitbasket.jpg" />
              <Subtitle5>Connect with our Farmers</Subtitle5>
              <Body3 large={"true"}>
                We provide you with an opportunity to directly affect lives of
                farmers
              </Body3>
            </BenefitCard>

            <BenefitCard>
              <BenefitCardIcon src="/images/grow.jpg" />
              <Subtitle5>Connect with our Farmers</Subtitle5>
              <Body3 large={"true"}>
                We provide you with an opportunity to directly affect lives of
                farmers
              </Body3>
            </BenefitCard>
          </CrowdFundingItemContainer>
        </SectionBody>
        {/* pioneer section */}

        <PioneerSectionContainer>
          <Subtitle3 large={"true"}>
            You can be a pioneer of hope for farmers
          </Subtitle3>
          <Body3 large={"true"}>
            We provide you with an opportunity to directly affect lives of
            farmers
          </Body3>
          <PioneerSectionButton>GET STARTED TODAY</PioneerSectionButton>
        </PioneerSectionContainer>
      </SectionBody>
    </>
  );
};

export default HomePage;
