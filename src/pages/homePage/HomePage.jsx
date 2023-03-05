import React from "react";
import {
  HomeSlider,
  FeaturesContainer,
  FeatureItemContainer,
  FeatureItemPic,
  FeatureItemText,
} from "./homePageStyle";
import { Box, SectionBody } from "../../components/globalComponents";

const HomePage = () => {
  return (
    <>
      {/* home slider */}
      <HomeSlider />
      {/*home page feature sections */}
      <SectionBody>
        <FeaturesContainer>
          {/* feature item 1 */}
          <Box>
            <FeatureItemContainer>
              <FeatureItemPic />
              <FeatureItemText>Promising return after harvest</FeatureItemText>
            </FeatureItemContainer>
          </Box>
          {/* feature item 2 */}
          <Box>
            <FeatureItemContainer>
              <FeatureItemPic />
              <FeatureItemText>Promising return after harvest</FeatureItemText>
            </FeatureItemContainer>
          </Box>
          {/* feature item 3 */}
          <Box>
            <FeatureItemContainer>
              <FeatureItemPic />
              <FeatureItemText>Promising return after harvest</FeatureItemText>
            </FeatureItemContainer>
          </Box>
          {/* feature item 4 */}
          <Box>
            <FeatureItemContainer>
              <FeatureItemPic />
              <FeatureItemText>Promising return after harvest</FeatureItemText>
            </FeatureItemContainer>
          </Box>
        </FeaturesContainer>
      </SectionBody>
    </>
  );
};

export default HomePage;
