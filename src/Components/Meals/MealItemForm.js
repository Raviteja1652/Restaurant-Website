import './MealItemForm.css';

const MealItemForm = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <form className='form'>
            <div className='input'>
                <label htmlFor='quantity'>Amount</label>
                <input type='number' id='quantity'></input>
            </div>
            <button onClick={submitHandler}>+Add</button>
        </form>
    )
};

export default MealItemForm;