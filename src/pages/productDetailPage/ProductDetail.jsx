import React from "react";
import {
  ProductDetailsTopContainer,
  ProductImage,
  ProductDescriptionBox,
  ProductLargeImage,
  RelatedProductsContainer,
  RelatedProductImage,
  ProductAddToCartButton,
  ProductDescriptionList,
  ListItem,
  ProductSpanText,
} from "../../styledComponents/productDetailPageStyledComp";
import {
  SectionBody,
  Subtitle1,
  Body2,
  Body4,
} from "../../styledComponents/globalComponents";

const ProductDetailPage = () => {
  return (
    <>
      <SectionBody>
        {/* product details section  */}
        <SectionBody>
          <ProductDetailsTopContainer>
            <ProductImage />
            <ProductDescriptionBox>
              <Body2> `</Body2>
            </ProductDescriptionBox>
          </ProductDetailsTopContainer>
        </SectionBody>

        <SectionBody>
          {/* product description section  */}
          <Subtitle1 bold={"true"}>Product Description</Subtitle1>
          <Body2 lineSpacing={"true"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            distinctio ullam corrupti, asperiores quod facilis error ex, numquam
            ea aliquam laudantium magnam necessitatibus consequatur facere eius
            illo sit eaque nihil incidunt unde aut quae? Tempora, culpa
            explicabo distinctio dicta laudantium earum corporis repudiandae
            expedita pariatur! Culpa itaque consequatur pariatur voluptate
            laudantium molestias tenetur explicabo delectus dolorem accusamus?
            Suscipit earum quibusdam fuga, praesentium vero error architecto
            incidunt rerum provident corrupti quasi recusandae ratione explicabo
            ipsa necessitatibus accusantium amet perspiciatis obcaecati
            consequatur reiciendis quae omnis eaque quos alias. Sunt pariatur
            dignissimos, suscipit quia omnis ipsum temporibus numquam hic
            voluptatem repellendus voluptatum ab?
          </Body2>

          <ProductDescriptionList>
            <ListItem>lorem item list</ListItem>
            <ListItem>lorem item list</ListItem>
            <ListItem>lorem item list</ListItem>
            <ListItem>lorem item list</ListItem>
          </ProductDescriptionList>
          <ProductLargeImage />

          {/* related product section  */}

          <Subtitle1 bold={"true"}>Related Products</Subtitle1>
          <RelatedProductsContainer>
            <RelatedProductImage />
            <RelatedProductImage />
            <RelatedProductImage />
          </RelatedProductsContainer>
        </SectionBody>
      </SectionBody>
    </>
  );
};

export default ProductDetailPage;
