import React from 'react';

// NutritionalValue component
const NutritionalValue = ({ protein, carbs, fat, calories }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md  border border-gray-200 mt-5 mx-auto">
            <h2 className="font-bold text-red-500 text-2xl mb-4 text-center">Nutritional Information</h2>
            <ul className="list-none space-y-2">
                <li className="flex justify-between">
                    <span className="font-medium">Protein:</span>
                    <span className="text-gray-600">{protein} g</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium">Carbohydrates:</span>
                    <span className="text-gray-600">{carbs} g</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium">Fat:</span>
                    <span className="text-gray-600">{fat} g</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium">Calories:</span>
                    <span className="text-gray-600">{calories} kcal</span>
                </li>
            </ul>
        </div>
    );
};

export default NutritionalValue;
