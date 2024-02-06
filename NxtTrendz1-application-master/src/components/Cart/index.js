import React from "react";
import Header from "../Header";
import CartListView from "../CartListView"
import EmptyCardView from "../EmptyCardView";
import "./index.css"
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const {cartList} = useContext(CartContext)
  const showEmptyView = cartList.length === 0;
  return (
    <>
      <Header />
      <div className="cart-container">
       {showEmptyView ? ( 
        <EmptyCardView/>        
        ): (
          <div className="cart-content-container"> 
           <h1 className="cart-heading">My Cart</h1>
            <CartListView />
          </div>
        )}  
      </div>
      
    </>
  );
};

export default Cart;
