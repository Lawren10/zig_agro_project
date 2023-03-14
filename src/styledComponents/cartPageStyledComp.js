import styled from "styled-components";

export const CartContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  padding: 0 1rem;
  margin-bottom: 3rem;
  height: auto;
`;
export const CartItemOutterContainer = styled.div`
  width: 70%;
  padding: 2rem;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;
export const CartSummaryContainer = styled.div`
  width: 30%;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const CartItemImg = styled.img`
  width: 10rem;
  height: 10rem;
  background-color: black;
`;

export const CartItemQuntityBox = styled.input`
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.3rem;
  width: 10%;
`;

export const RemoveBtn = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem;
  background-color: white;
  color: black;
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;
`;

export const CartSummaryItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartToatalSmallText = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: black;
`;

export const CartToatalLargeText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: black;
`;

export const CheckOutBtn = styled.button`
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem 3rem;
  background-color: black;
  color: white;
  font-size: 0.7rem;
  font-weight: 400;
  border-radius: 0.3rem;
  margin: 0.5rem 0;
  cursor: pointer;
`;
