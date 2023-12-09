import { useContext } from 'react';
import Modal from '../UI/Modal';
import './Cart.css';
import CartContext from '../../store/React-Context';
import CartItem from './CartItem';

const Cart = (props) => {
    const ctx = useContext(CartContext)
    const hasItems = ctx.items.length > 0;
    
    const cartItems = (
        <ul className='cart-items'> 
            {ctx.items.map(item => 
                <CartItem key={item.id} id={item.id} name={item.name} price={item.price} 
                    amount={item.quantity}
                />
            )}
        </ul>
    );
    const totalPrice = ctx.items.reduce((acc, item) => {
        return acc + item.price*item.quantity
    }, 0);

    return(
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>{`₹${totalPrice.toFixed(2)}`}</span>
            </div> 
            <div className='actions'>
                <button className='button--alt' onClick={props.onHideCart}>Close</button>
                {hasItems && <button className='orderButton'>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;
