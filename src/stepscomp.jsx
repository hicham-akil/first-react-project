import { list } from 'postcss';
import React from 'react';

const EggSteps = () => {
    const stepsList = [
        "Crack the eggs into a bowl.",
        "Beat the eggs until well combined.",
        "Heat a non-stick skillet over medium heat.",
        "Add butter or oil to the skillet and let it melt.",
        "Pour the beaten eggs into the skillet.",
        "Allow the eggs to cook for a few seconds until the edges start to set.",
        "Gently tilt the pan and lift the edges of the omelette to let uncooked egg flow to the edges.",
        "Once mostly set, add any desired fillings (cheese, vegetables, etc.) on one half.",
        "Fold the omelette in half and cook for another minute.",
        "Slide the omelette onto a plate and serve immediately."
    ];

    return (
        <div>
            <h2 className='text-red-500 ml-3 font-bold text-xl'>Steps to Make Eggs</h2>
            <ul  className='list-decimal font-medium steps'>
                {stepsList.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
        </div>
    );
};

export default EggSteps;
