import React from 'react';
import './Idea.css';
import Card from '../Card/Card';

const Idea = ({ drinks }) => {
    const drinkCards = drinks.map(drink => {
        // console.log(drink);
        return (
            <Card 
                key={drink.idDrink}
                name={drink.strDrink}
                category={drink.strCategory}
                glass={drink.strGlass}
                image={drink.strDrinkThumb}
                instructions={drink.strInstructions}
                ingredients={[`${drink.strIngredient1} - ${drink.strMeasure1}`, `${drink.strIngredient2} - ${drink.strMeasure2}`, `${drink.strIngredient3} - ${drink.strMeasure3}`, `${drink.strIngredient4} - ${drink.strMeasure4}`, `${drink.strIngredient5} - ${drink.strMeasure5}`, `${drink.strIngredient6} - ${drink.strMeasure6}`]}
            />
        )
    })

    return (
        <React.Fragment>
             <section className='drink-cards'>
                 { drinkCards }
             </section>
        </React.Fragment>
    )
}

export default Idea;