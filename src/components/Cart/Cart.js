import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  // 여기만 이렇게 고치면 영원히 안 터집니다!
  const cartItems = useSelector((state) => state.cart?.items || []);
  // 또는
  // const cartItems = useSelector((state) => state.cart.items) || [];

  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
