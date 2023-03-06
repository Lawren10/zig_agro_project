import React from "react";
import FeatureSection from "../../components/homePageComponents/FeatureSection";
import {
  HomeSlider,
  ProductCardContainer,
  ProductCard,
  CardWrapper,
  ProductCardImg,
  CardHeader,
  CardHeaderText,
  CardHeaderTextSec,
  ProductCardBody,
  ProductPrice,
  CardTittleText,
  CardBodyText,
  ProductButtonContainer,
  ProductButton,
  ProductButtonOutlined,
  PillButton,
} from "../../styledComponents/homePageStyledComp";
import { SectionBody } from "../../styledComponents/globalComponents";
import ValueSection from "../../components/homePageComponents/ValueSection";

const HomePage = () => {
  return (
    <>
      {/* home slider */}
      <HomeSlider />
      {/*home page feature sections */}
      <FeatureSection />
      {/* home page product items section */}
      <SectionBody>
        <ProductCardContainer>
          {/* produdct 1 */}
          <ProductCard>
            <PillButton>Available</PillButton>
            <ProductCardImg />
            <CardWrapper>
              <CardHeader>
                <CardHeaderText>
                  Rice I_2023{" "}
                  <CardHeaderTextSec>(Oryza Sativa)</CardHeaderTextSec>
                </CardHeaderText>
              </CardHeader>
              <ProductCardBody>
                {/* card body left side */}
                <div>
                  <CardTittleText>Cost per unit</CardTittleText>
                  <ProductPrice>GH 221.30</ProductPrice>
                  <CardTittleText>farming start date</CardTittleText>
                  <CardBodyText>20th may 2023</CardBodyText>
                </div>
                {/* card body right side */}
                <div>
                  <CardTittleText align={"end"}>Ros</CardTittleText>
                  <CardBodyText align={"end"}>15.6% - 17.8%</CardBodyText>
                  <CardTittleText align={"end"}>
                    farming end date
                  </CardTittleText>
                  <CardBodyText align={"end"}>30th Nov 2023</CardBodyText>
                </div>
              </ProductCardBody>
              <CardTittleText>Farm Location</CardTittleText>
              <CardBodyText>Asuturare,Greater Accra - Ghana</CardBodyText>
              <ProductButtonContainer>
                <ProductButton>Sponsor Farm</ProductButton>
                <ProductButtonOutlined>Read...</ProductButtonOutlined>
              </ProductButtonContainer>
            </CardWrapper>
          </ProductCard>
          {/* produdct 2 */}
          <ProductCard>
            <PillButton>Available</PillButton>
            <ProductCardImg />
            <CardWrapper>
              <CardHeader>
                <CardHeaderText>
                  Rice I_2023{" "}
                  <CardHeaderTextSec>(Oryza Sativa)</CardHeaderTextSec>
                </CardHeaderText>
              </CardHeader>
              <ProductCardBody>
                {/* card body left side for product2 */}
                <div>
                  <CardTittleText>Cost per unit</CardTittleText>
                  <ProductPrice>GH 221.30</ProductPrice>
                  <CardTittleText>farming start date</CardTittleText>
                  <CardBodyText>20th may 2023</CardBodyText>
                </div>
                {/* card body right side for product2*/}
                <div>
                  <CardTittleText align={"end"}>Ros</CardTittleText>
                  <CardBodyText align={"end"}>15.6% - 17.8%</CardBodyText>
                  <CardTittleText align={"end"}>
                    farming end date
                  </CardTittleText>
                  <CardBodyText align={"end"}>30th Nov 2023</CardBodyText>
                </div>
              </ProductCardBody>
              <CardTittleText>Farm Location</CardTittleText>
              <CardBodyText>Asuturare,Greater Accra - Ghana</CardBodyText>
              <ProductButtonContainer>
                <ProductButton>Sponsor Farm</ProductButton>
                <ProductButtonOutlined>Read...</ProductButtonOutlined>
              </ProductButtonContainer>
            </CardWrapper>
          </ProductCard>
          {/* produdct 3 */}
          <ProductCard>
            <PillButton>Available</PillButton>
            <ProductCardImg />
            <CardWrapper>
              <CardHeader>
                <CardHeaderText>
                  Rice I_2023{" "}
                  <CardHeaderTextSec>(Oryza Sativa)</CardHeaderTextSec>
                </CardHeaderText>
              </CardHeader>
              <ProductCardBody>
                {/* card body left side for product3 */}
                <div>
                  <CardTittleText>Cost per unit</CardTittleText>
                  <ProductPrice>GH 221.30</ProductPrice>
                  <CardTittleText>farming start date</CardTittleText>
                  <CardBodyText>20th may 2023</CardBodyText>
                </div>
                {/* card body right side for product3*/}
                <div>
                  <CardTittleText align={"end"}>Ros</CardTittleText>
                  <CardBodyText align={"end"}>15.6% - 17.8%</CardBodyText>
                  <CardTittleText align={"end"}>
                    farming end date
                  </CardTittleText>
                  <CardBodyText align={"end"}>30th Nov 2023</CardBodyText>
                </div>
              </ProductCardBody>
              <CardTittleText>Farm Location</CardTittleText>
              <CardBodyText>Asuturare,Greater Accra - Ghana</CardBodyText>
              <ProductButtonContainer>
                <ProductButton>Sponsor Farm</ProductButton>
                <ProductButtonOutlined>Read...</ProductButtonOutlined>
              </ProductButtonContainer>
            </CardWrapper>
          </ProductCard>
        </ProductCardContainer>
      </SectionBody>
      {/* Value proposition Section */}
      <SectionBody>
        <ValueSection />
      </SectionBody>
    </>
  );
};

export default HomePage;
