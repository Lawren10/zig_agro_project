import React from "react";
import FeatureSection from "../../components/homePageComponents/FeatureSection";
import {
  HomeSlider,
  ProductCardContainer,
  ProductCard,
  ProductCardImg,
  CardHeader,
  cardHeaderText,
  cardHeaderTextSec,
  ProductCardBody,
} from "../../styledComponents/homePageStyle";
import { SectionBody } from "../../styledComponents/globalComponents";

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
          <ProductCard>
            <ProductCardImg />
            <CardHeader></CardHeader>
          </ProductCard>
        </ProductCardContainer>
      </SectionBody>
    </>
  );
};

export default HomePage;
