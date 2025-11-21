import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-Slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const carQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="badge">{carQuantity}</span>
    </button>
  );
};

export default CartButton;
