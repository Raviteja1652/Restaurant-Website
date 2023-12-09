import { useContext } from 'react';
import classes from './CartItem.module.css';
import CartContext from '../../store/React-Context';

const CartItem = (props) => {
  const ctx = useContext(CartContext)
  const price = `₹${(props.price*props.amount).toFixed(2)}`;
  
  const addButtonHandler = () => {
    ctx.increaseCount(props.id)
  };
  const removeButtonHandler = () => {
    ctx.removeItem(props.id)
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeButtonHandler}>−</button>
        <button onClick={addButtonHandler}>+</button>
      </div>
    </li>
  );
}; 

export default CartItem;
