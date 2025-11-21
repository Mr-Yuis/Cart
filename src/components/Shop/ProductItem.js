import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="item">
      <header>
        <h3>{title}</h3>
        <div className="price">${price.toFixed(2)}</div>
      </header>
      <p>{description}</p>
      <div className="actions">
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </li>
  );
};

//export default ProductItem;
