import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";
import Products from "./components/Products";
import PrivateComponet from "./components/PrivateComponent";
import NotFound from "./components/NotFound";
import ProductItemDetails from "./components/ProductItemDetails";
import CartContext from "./context/CartContext";
import Register from "./components/Register";

function App(props) {
  const [cartList, setCartList] = useState([]);

  const removeAllCartItems = () => {
    setCartList([]);
  };

  const incrementCartItemQuantity = (id) => {
    setCartList((prevCartList) =>
      prevCartList.map((eachCartItem) => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1;
          return { ...eachCartItem, quantity: updatedQuantity };
        }
        return eachCartItem;
      })
    );
  };

  const decrementCartItemQuantity = (id) => {
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === id
    );
    if (productObject.quantity > 1) {
      setCartList((prevCartList) =>
        prevCartList.map((eachCartItem) => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1;
            return { ...eachCartItem, quantity: updatedQuantity };
          }
          return eachCartItem;
        })
      );
    } else {
      removeCartItem(id);
    }
  };

  const removeCartItem = (id) => {
    const updatedCartList = cartList.filter(
      (eachCartItem) => eachCartItem.id !== id
    );
    setCartList(updatedCartList);
  };

  const addCartItem = (product) => {
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === product.id
    );

    if (productObject) {
      setCartList((prevCartList) =>
        prevCartList.map((eachCartItem) => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity;

            return { ...eachCartItem, quantity: updatedQuantity };
          }

          return eachCartItem;
        })
      );
    } else {
      const updatedCartList = [...cartList, product];

      setCartList(updatedCartList);
    }
  };

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{
          cartList,
          addCartItem,
          removeCartItem,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
          removeAllCartItems,
        }}
      >
        <Routes>
          <Route element={<PrivateComponet />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductItemDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
