import React from "react";
import {
  ShopSlider,
  ShopProductContainer,
  ShopFilterProductContainer,
  ShopProductListContainer,
  FilterItemInput,
  FilterItemLabel,
  FilterItemContainer,
  ShopProductCard,
  ShopProductCardBody,
  ShopProductImage,
  ProductDetailButton,
  ShopProductListItemContainer,
  SortResultBox,
  SortSelectionDropDown,
  SortSelectOPtion,
  FilterItemWapper,
} from "../../styledComponents/shopPageStyledComp";
import {
  SectionBody,
  Header2,
  Subtitle2,
  Subtitle3,
  Body3,
} from "../../styledComponents/globalComponents";

const ShopPage = () => {
  return (
    <>
      {/* shop hero section containing a slider */}
      <ShopSlider />
      {/* shop product list section  */}
      <SectionBody>
        <ShopProductContainer>
          {/* shop product filter section */}
          <ShopFilterProductContainer>
            {/* filter for categories */}
            <div id="categories_filter">
              <Header2>Categories</Header2>
              <FilterItemWapper>
                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>

                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>

                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>

                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>

                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>
              </FilterItemWapper>
            </div>
            {/* filter for Location */}
            <div id="Location_filter">
              <Header2>Location</Header2>
              <FilterItemWapper>
                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>

                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>

                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>

                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>

                <FilterItemContainer>
                  <FilterItemInput type="checkbox" />
                  <FilterItemLabel>Lorem</FilterItemLabel>
                </FilterItemContainer>
              </FilterItemWapper>
            </div>
          </ShopFilterProductContainer>
          {/* shop product list section */}

          <ShopProductListContainer>
            <SortResultBox>
              <Subtitle3>23 Results</Subtitle3>
              <SortSelectionDropDown>
                <SortSelectOPtion>Sort by</SortSelectOPtion>
                <SortSelectOPtion>lorem</SortSelectOPtion>
                <SortSelectOPtion>lorem</SortSelectOPtion>
                <SortSelectOPtion>lorem</SortSelectOPtion>
              </SortSelectionDropDown>
            </SortResultBox>
            <ShopProductListItemContainer>
              <ShopProductCard>
                <ShopProductImage />
                <ShopProductCardBody>
                  <Subtitle2>Product Name</Subtitle2>
                  <Body3>Price</Body3>
                  <ProductDetailButton>See details</ProductDetailButton>
                </ShopProductCardBody>
              </ShopProductCard>

              <ShopProductCard>
                <ShopProductImage />
                <ShopProductCardBody>
                  <Subtitle2>Product Name</Subtitle2>
                  <Body3>Price</Body3>
                  <ProductDetailButton>See details</ProductDetailButton>
                </ShopProductCardBody>
              </ShopProductCard>

              <ShopProductCard>
                <ShopProductImage />
                <ShopProductCardBody>
                  <Subtitle2>Product Name</Subtitle2>
                  <Body3>Price</Body3>
                  <ProductDetailButton>See details</ProductDetailButton>
                </ShopProductCardBody>
              </ShopProductCard>

              <ShopProductCard>
                <ShopProductImage />
                <ShopProductCardBody>
                  <Subtitle2>Product Name</Subtitle2>
                  <Body3>Price</Body3>
                  <ProductDetailButton>See details</ProductDetailButton>
                </ShopProductCardBody>
              </ShopProductCard>
            </ShopProductListItemContainer>
          </ShopProductListContainer>
        </ShopProductContainer>
      </SectionBody>
    </>
  );
};

export default ShopPage;
