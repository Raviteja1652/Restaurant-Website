import React from "react";
import './Header.css';
import mealsImage from '../../Images/spencer-davis-vJsj-hgOEG0-unsplash.jpg';
import CartButton from "./CartButton";

const Header = () => {
    return(
        <div>
            <header className="header">
                <h1>ReactMeals</h1>
                <CartButton />
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="Table With Delicious Food"></img>
            </div>
        </div>
    )
};

export default Header;