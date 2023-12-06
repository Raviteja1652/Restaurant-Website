import Modal from '../UI/Modal';
import './Cart.css';

const Cart = (props) => {
    const cartItems = (
        <ul className='cart-items'>
            {[{id:'s1', name:'Chicken Panner', amount:'1', price:'130'}].map(item => 
                <li>{item.name}</li>
            )}
        </ul>
    )
    return(
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>150</span>
            </div> 
            <div className='actions'>
                <button className='button--alt' onClick={props.onHideCart}>Close</button>
                <button className='orderButton'>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;
