import './MealItem.css';

const MealItem = (props) => {
    const price = `₹${props.price}`
    return (
        <li className='meal' key={props.id}>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>
    
            <div>

            </div>
        </li>
    )
};

export default MealItem;