import React from "react";
import {
  CartContainer,
  CartItemOutterContainer,
  CartSummaryContainer,
  CartItemContainer,
  CartItemImg,
  CartItemQuntityBox,
  RemoveBtn,
  CartSummaryItemBox,
  CheckOutBtn,
  CartToatalSmallText,
  CartToatalLargeText,
} from "../../styledComponents/cartPageStyledComp";

import {
  SectionBody,
  Header1,
  Body4,
  Body3,
} from "../../styledComponents/globalComponents";

const CartPage = () => {
  return (
    <>
      <SectionBody>
        <Header1>Your Cart</Header1>
        <CartContainer>
          {/* left side of cart displaying the cart list items */}
          <CartItemOutterContainer>
            <CartItemContainer>
              <CartItemImg />
              {/* cart item name box */}
              <div>
                <Body4 cart={"true"}>Yam(60kg)</Body4>
              </div>
              {/* cart item price box  */}
              <div>
                <Body3>GH 4500</Body3>
              </div>
              {/* cart item quantity box  */}
              <CartItemQuntityBox type="number" />
              {/* cart item remove btn  */}
              <RemoveBtn>x</RemoveBtn>
            </CartItemContainer>

            <CartItemContainer>
              <CartItemImg />
              {/* cart item name box */}
              <div>
                <Body4 cart={"true"}>Yam(60kg)</Body4>
              </div>
              {/* cart item price box  */}
              <div>
                <Body3>GH 4500</Body3>
              </div>
              {/* cart item quantity box  */}
              <CartItemQuntityBox type="number" />
              {/* cart item remove btn  */}
              <RemoveBtn>x</RemoveBtn>
            </CartItemContainer>
          </CartItemOutterContainer>
          {/* right side of cart displaying the cart summary and checkout button  */}
          <CartSummaryContainer>
            <Body4 cart={"true"}>Order Summary</Body4>
            <CartSummaryItemBox>
              <Body3>2 Items</Body3>
              <Body3>GH 5000</Body3>
            </CartSummaryItemBox>

            <CartSummaryItemBox>
              <Body3>Delivery fee</Body3>
              <Body3>GH 5000</Body3>
            </CartSummaryItemBox>

            <CartSummaryItemBox>
              <CartToatalSmallText>Total Cost</CartToatalSmallText>
              <CartToatalLargeText>GH 6500</CartToatalLargeText>
            </CartSummaryItemBox>

            <CheckOutBtn>PROCEED TO CHECKOUT</CheckOutBtn>
          </CartSummaryContainer>
        </CartContainer>
      </SectionBody>
    </>
  );
};

export default CartPage;
