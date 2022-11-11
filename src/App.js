import { nanoid } from 'nanoid';
import React from 'react';
import './App.css';
import logo from './assets/favicon-32x32.png';
import Todo from './components/Todo';

function App() {
  const [todo, setTodo] = React.useState([]);

  
  function addTodo(){
    let task = {
      isCompleted: false,
      text: "",
      id: nanoid()
    }
    setTodo(prevTodo => [task, ...prevTodo])
  }



  return (
    <main className='container mx-auto py-10 md:my-0 md:py-10 sm:my-4'>
      <div className='flex justify-center align-bottom'>
        <img src={logo} alt='logo' className='mx-2 my-1 w-8 h-8'></img>
        <h1 className="text-4xl font-bold text-center text-amber-700">TODO APP</h1>
      </div>
      <div className='px-4 my-8 lg:px-48'>
        <div className='flex justify-end'>
          <button type='button' onClick={addTodo} className='w-full lg:w-auto md:w-auto bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center'>
            <svg className="fill-current w-6 h-6 mr-2 svg-icon" viewBox="0 0 20 20">
                  <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
            </svg>
            <span>Add Task</span>
          </button>
        </div>
        <hr className='my-4 border-amber-800'/>
        { 
          todo.length === 0 ? <h1 className='text-2xl font-semibold text-center text-[#69DC9E]'>All tasks accomplished!!</h1>
          :
          <Todo data={todo}/>
        }
      </div>
      
    </main>
  );
}

export default App;
