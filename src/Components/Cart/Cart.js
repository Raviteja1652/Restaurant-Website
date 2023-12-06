import Modal from '../UI/Modal';
import './Cart.css';

const Cart = () => {
    const cartItems = (
        <ul className='cart-items'>
            {[{id:'s1', name:'Chicken Panner', amount:'1', price:'130'}].map(item => 
                <li>{item.name}</li>
            )}
        </ul>
    )
    return(
        <Modal>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>150</span>
            </div>
            <div className='actions'>
                <button className='button--alt'>Close</button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;