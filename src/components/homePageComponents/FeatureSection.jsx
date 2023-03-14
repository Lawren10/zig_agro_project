import React from "react";
import {
  FeaturesContainer,
  FeatureItemContainer,
  FeatureItemPic,
  FeatureItemText,
} from "../../styledComponents/homePageStyledComp";
import { Box, SectionBody } from "../../styledComponents/globalComponents";

const FeatureSection = () => {
  return (
    <div>
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
    </div>
  );
};

export default FeatureSection;
