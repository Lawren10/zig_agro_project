import styled from "styled-components";

export const ProductDetailsTopContainer = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;
export const ProductImage = styled.img`
  width: 50%;
  height: 100%;
  background-color: lightgray;
`;

export const ProductDescriptionBox = styled.div`
  width: 50%;
`;

export const ProductSpanText = styled.span`
  font-size: 0.85rem;
  color: lightgreen;
  font-weight: 400;
  display: inline-block;
  padding-left: 0.5rem;
`;

export const ProductLargeImage = styled.img`
  width: 100%;
  height: 25rem;
  background-color: lightgray;
`;
export const RelatedProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;
export const RelatedProductImage = styled.img`
  padding: 4rem;
  background-color: lightgray;
`;

export const ProductAddToCartButton = styled.button`
  border: none;
  outline: none;
  padding: 1rem 3rem;
  color: white;
  background-color: black;
  font-weight: 200;
  font-size: 0.9rem;
`;
export const ProductDescriptionList = styled.ul`
  color: lightgray;
`;
export const ListItem = styled.li`
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: gray;
  font-weight: 400;
`;
