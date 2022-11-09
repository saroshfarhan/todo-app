import React from 'react';

export default function Todo(props) {

    let five = []
    for(let i=0; i<5; i++){
            five.push(
                <div className='rounded overflow-hidden shadow-md my-1' key={i}>
                    <h2 className='text-lg text-center font-bold my-4'>Todo card {i +1} WIP</h2>
                </div>
             )
        }

    return (
        <>
            {five}
        </>
    )
}