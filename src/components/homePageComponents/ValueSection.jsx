import React from "react";
import {
  ValueSectionContainer,
  ValueSectionInnerContainerLeft,
  ValueSectionInnerContainerRight,
  ValueItemContainer,
  ValueItemIcon,
  PartnershipContainer,
} from "../../styledComponents/homePageStyledComp";

import {
  Box,
  FlexCenter,
  Header1,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Body3,
  Logo,
} from "../../styledComponents/globalComponents";

const ValueSection = () => {
  return (
    <>
      <ValueSectionContainer>
        {/* value section right side */}
        <ValueSectionInnerContainerLeft>
          <Logo />
          <Header1>WHY ZIGAGRO?</Header1>
          <Body1>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Body1>
        </ValueSectionInnerContainerLeft>
        {/* value section right side */}
        <ValueSectionInnerContainerRight>
          <FlexCenter gap={"2rem"}>
            <Box>
              <ValueItemContainer>
                <ValueItemIcon />
                <Subtitle2>We remain credible</Subtitle2>
                <Body2>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Body2>
              </ValueItemContainer>
            </Box>
            <Box>
              <ValueItemContainer>
                <ValueItemIcon />
                <Subtitle2>We remain credible</Subtitle2>
                <Body2>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Body2>
              </ValueItemContainer>
            </Box>
          </FlexCenter>
          <div style={{ padding: "1rem 0" }}></div>
          <FlexCenter gap={"2rem"}>
            <Box>
              <ValueItemContainer>
                <ValueItemIcon />
                <Subtitle2>We remain credible</Subtitle2>
                <Body2>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Body2>
              </ValueItemContainer>
            </Box>
            <Box>
              <ValueItemContainer>
                <ValueItemIcon />
                <Subtitle2>We remain credible</Subtitle2>
                <Body2>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Body2>
              </ValueItemContainer>
            </Box>
          </FlexCenter>
        </ValueSectionInnerContainerRight>
      </ValueSectionContainer>

      <PartnershipContainer>
        <ValueSectionInnerContainerLeft>
          <Subtitle1>Safe,Confidential and Secure</Subtitle1>
          <Body3>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </Body3>
        </ValueSectionInnerContainerLeft>
        <ValueSectionInnerContainerRight></ValueSectionInnerContainerRight>
      </PartnershipContainer>
    </>
  );
};

export default ValueSection;
