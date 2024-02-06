import CartContext from "../../context/CartContext";
import CartItem from "../CartItem";
import {useContext } from "react" 
import "./index.css"


const CartListView = () => {
  const {cartList} = useContext(CartContext)     
        return (
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
        )

}


export default CartListView;
