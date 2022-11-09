import React from 'react';

export default function Todo(props) {

   
   const tasks = props.data.map((task) => {
    return (
        <div className='rounded overflow-hidden shadow-md my-1' key={task.id}>
            <h2 className='text-lg text-center font-bold my-4'>{task.text}</h2>
        </div>
    )
   }
   ) 
             

    return (
        <>
            {tasks}
        </>
    )
}