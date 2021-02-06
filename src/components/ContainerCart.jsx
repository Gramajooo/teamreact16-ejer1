import React from "react";
import cartIcon from "../assets/img/cart.png";
import "../assets/style/components/ContainerCart.css";

const ContainerCard = () => {
  return (
    <>
      <div className="container__top">
        <h1>Carrito de Compras</h1>
        <img src={cartIcon} alt="shoppingcart" className="cartIcon" />
      </div>
      <div className="container__center">
        <div className="shoppingcart"></div>
      </div>
    </>
  );
};

export default ContainerCard;
