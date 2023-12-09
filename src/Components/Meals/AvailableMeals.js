import Card from '../UI/Card';
import './AvailableMeals.css';
import MealItem from './MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Butter Naan',
      description: 'Delicious with 1 bowl of Palak Paneer',
      price: 230,
    },
    {
      id: 'm2',
      name: 'Tandoori Chicken',
      description: 'A Punjabi specialty!',
      price: 170,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 140,
    },
    {
      id: 'm4',
      name: 'The Indian Thali',
      description: 'Healthy...and tasty at once',
      price: 150,
    },
];

const AvailableMeals = (props) => {
    const MealsData = DUMMY_MEALS.map(meal => <MealItem 
        id={meal.id}
        key={meal.id}
        name={meal.name} 
        description={meal.description}
        price={meal.price} 
        sending={props.sending}
    />)

    return(
        <section className='meals'>
            <Card>
                <ul>
                    {MealsData}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;