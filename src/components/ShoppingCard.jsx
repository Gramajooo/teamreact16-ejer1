import React from "react";
import cartIcon from "../assets/img/cart.png";
import "../assets/style/components/ShoppingCart.css";

const ShopingCard = () => {
  return (
    <>
      <div className="container__top">
        <h1>Carrito de Compras</h1>
        <img src={cartIcon} alt="shoppingcard" className="cartIcon" />
      </div>
      <div className="container__center">
        <div className="shoppingcard">
          <p>Item</p>
          <p>Item</p>
          <p>Item</p>
          <p>Item</p>
        </div>
      </div>
    </>
  );
};

export default ShopingCard;
