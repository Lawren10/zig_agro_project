import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShopSlider = styled.section`
  width: 100%;
  height: 80vh;
  background-color: lightgray;
  border-bottom: 2px solid green;
`;

export const ShopProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 0 3rem 4rem;
  @media (max-width: 550px) {
    flex-direction: column;
    padding: 3rem 0.5rem;
  }
`;
export const ShopFilterProductContainer = styled.div`
  width: 20%;
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const ShopProductListContainer = styled.div`
  width: 80%;
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const ShopProductListItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    gap: 1rem;
  }
`;

export const SortResultBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const SortSelectionDropDown = styled.select`
  border: none;
  outline: none;
  padding: 0.5rem;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 200;
  color: green;
`;
export const SortSelectOPtion = styled.option`
  color: black;
  padding: 0.5rem 0;
`;

export const FilterItemInput = styled.input``;

export const FilterItemLabel = styled.label`
  font-size: 0.9rem;
  color: gray;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const FilterItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.3rem 0;
  @media (max-width: 550px) {
    gap: 0.5rem;
  }
`;

export const FilterItemWapper = styled.div`
  @media (max-width: 550px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const ShopProductCard = styled.div`
  width: 30.3%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    border: 1px solid orange;
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 550px) {
    width: 46%;
  }
`;

export const ShopProductCardBody = styled.div`
  padding: 0rem 1rem 0.5rem 1rem;
`;

export const ShopProductImage = styled.img`
  width: 100%;
  height: 10rem;
  background-color: lightgray;
`;

export const ProductDetailButton = styled(Link)`
  border: none;
  outline: none;
  padding: 0.5rem 0;
  display: inline-block;
  text-decoration: none;
  color: orange;
  font-weight: 600;
  font-size: 0.9rem;
  &:hover {
    text-decoration: underline;
  }
`;
