import React, {useContext} from 'react';
import CartContext from '../../store/React-Context';
import './MealItemForm.css';

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext)
    const submitHandler = (e) => {
        e.preventDefault()
        const quantity = document.getElementById(`quantity_${props.id}`).value

        // props.sending(true)
        // added))console.log(e.target)
        // CartContext.items.push(props.item)
        // cartCtx.addItem({...props.item, quantity: +quantity})
        // cartCtx.items.forEach((evrItem) => 
        //     evrItem.id === props.item.id ? evrItem.quantity = evrItem.quantity + (+quantity) :
        // )
        const existingItemIndex = cartCtx.items.findIndex(item => item.id === props.item.id)
        if (existingItemIndex !== -1) {
            cartCtx.updateItem(existingItemIndex, quantity)
        } else {
            cartCtx.addItem({...props.item, quantity: +quantity})
        }
    }
    // {
    //     if(evrItem.id === props.item.id) {
    //         evrItem.quantity = evrItem.quantity
    //     }

    return(
        <form className='form'>
            <div className='input'>
                <label htmlFor={`quantity_${props.id}`}>Amount</label>
                <input type='number' id={`quantity_${props.id}`} min={1} max={5} step={1} defaultValue={0}></input>
            </div>
            <button onClick={submitHandler}>+Add</button>
        </form>
    )
};

export default MealItemForm; 