import React from 'react';

export default function Todo(props) {

   const tasks = props.data.map((task, index) => {
    return (
        <div className='rounded overflow-hidden shadow-md my-1' key={task.id}>
            <div className='flex items-center text-center justify-between'>
                {/* <input 
                    type="checkbox" 
                    name="isCompleted" 
                    id="isCompleted" 
                    className='default:ring-2 mx-4 lg:mx-4'
                /> for future purposes*/}
                <div className='w-auto my-4 ml-2 pr-4 lg:px-2 lg:pr-0'>
                    <p className='px-2 lg:px2 w-auto text-left'>{task.task}</p>
                </div>
                <div 
                    className='items-end ml-0 mr-4 lg:ml-[14rem] hover:text-red-500 hover:cursor-pointer'
                    onClick={() => props.onDelete(index)}
                    >
                    <svg className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
            </div>
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