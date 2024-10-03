import React from 'react';

function PreparingTime() {
    return (
        <div className='h-1/2 mt-3 bg-pink-300'>
            <ul className='list-disc time ' >
                <h3 className='ml-5 font-medium text-red-500'>Preparing time</h3>
                <li>
                    <span className='font-bold'>Total: </span> Approximately 10 min
                </li>
                <li>
                    <span className='font-bold'>Preparing: </span> Approximately 5 min
                </li>
                <li>
                    <span className='font-bold'>Cooking: </span> Approximately 5 min
                </li>
            </ul>
        </div>
    );
}

export default PreparingTime;
