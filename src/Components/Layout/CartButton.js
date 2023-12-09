import './CartButton.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/React-Context';

const CartButton = (props) => {
    const ctx = useContext(CartContext);
    // const numberOfItemsInCart = ctx.items.reduce((currNumber, item) => {
    //     return currNumber + item.amount;
    // }, 0)
    let numberOfItemsInCart = 0;
    ctx.items.forEach(item => {
        numberOfItemsInCart = numberOfItemsInCart + item.quantity
    });

    return(
        <button className='button' onClick={props.onClick}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>{numberOfItemsInCart}</span>
        </button>
    )
}; 

export default CartButton;