import React, {useState} from "react";
import CartContext from "./React-Context";

const CartProvider = (props) => {
    const [menuItems, setMenuItems] = useState([])

    const addItemToCartHandler = (item) => {
        setMenuItems([...menuItems, item])
        // setMenuItems((prevItems) => {
        //     const updatedItems = [...prevItems, item]
        //     return updatedItems;
        // })
    };
    const removeItemFromCartHandler = (id) => {
        setMenuItems((prevItems) => {
            const updatedItems = prevItems.map(item => {
                if (item.id === id) {
                    if(item.quantity > 1){
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return null
                    }
                }
                return item;
            }).filter(Boolean);
            return updatedItems;
        });
    };

    const updateItemHandler = (index, quantity) => {
        setMenuItems((prevItems) => {
            const updatedItems = [...prevItems]
            updatedItems[index].quantity += (+quantity)
            return updatedItems
        })
    };
    const increaseCountHandler = (id) => {
        setMenuItems((prevItems) => {
            const updatedItems = prevItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return updatedItems;
        });
    }

    const cartContext = {
        items: menuItems,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        updateItem: updateItemHandler,
        increaseCount: increaseCountHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;