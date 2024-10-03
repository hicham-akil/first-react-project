import React from 'react';
import PreparingTime from './preparingcomp'; // Ensure this path is correct
import './App.css'; // Ensure your styles are defined here
import logo from './imgreactfood.jpg'; 
import EggSteps from './stepscomp';
import NutritionalValue from './nutrutioncomp';
function App() {
    return (
    
            <div className="app main max-md:w-full   mx-auto p-6 bg-white w-2/4 rounded-xl">
                <div >
                    <div className="image mb-7">
                        <img src={logo} alt="" className='mx-auto'/>
                    </div>
                    <div> 
                        <h1 className='font-bold text-5xl mb-3 max-md:text-2xl'>Simple Omelet Recipe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates.</p>
                      
                        <PreparingTime />
                        <h1 className='font-bold text-red-500 text-xl ml-4'>Ingridient</h1>
                        <ul className='list-disc ml-10'>
                        <li>2-3 eggs</li>
                        <li>1 tablespoon of butter or oil</li>
                        <li>Salt and pepper</li>
                        <li>oil</li>
                        <li>chesse</li>
                        </ul>
                        <EggSteps />
                        <NutritionalValue protein={"20"} fat={"20"} calories={"300"} carbs={"400"}/>
                    </div>
                </div>
              

            </div>
      
    );
}

export default App;
