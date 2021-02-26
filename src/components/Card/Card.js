import React from 'react';
import './Card.css';

const Card = ({name, image, category, glass, instructions, ingredients}) => {
    return (
        <div className='drink-card' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
            <div className='drink-text'>
                <h2>{name}</h2>
                <p>{category}</p>
                <p>Glass Type: {glass}</p>
                <ul>Ingredients:{ingredients.map((ingredient, index) => {
                    if (!ingredient.includes('null')) {
                        return <li key={index}>{ingredient}</li>
                    }
                })}
                </ul>
                <p>{instructions}</p>
            </div>
        </div>
    )
}

export default Card;