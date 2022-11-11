import React from 'react';

export default function Todo(props) {

    const [value, setValue] = React.useState();
    const [editingValue, setEditingValue] = React.useState(value);

    const onChange = (event) => {
        setEditingValue(event.target.value);
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
        event.target.blur();
        }
    };

    const onBlur = (event) => {
        if (event.target.value.trim() === "") {
        setEditingValue(value);
        } else {
        setValue(event.target.value);
        }
    };

    const onInput = (target) => {
        if (target.scrollHeight > 33) {
        target.style.height = "24px";
        target.style.height = target.scrollHeight - 8 + "px";
        }
    };

    // const textareaRef = React.useRef();

    // React.useEffect(() => {
    //     onInput(textareaRef.current);
    // }, [onInput, textareaRef]);
 

   
   const tasks = props.data.map((task) => {

    return (
        <div className='rounded overflow-hidden shadow-md my-1' key={task.id}>
            <div className='flex items-center text-center'>
                <input type="checkbox" name="" id="" className='default:ring-2 mx-4 lg:mx-4 '/>
                <div className='w-auto my-4 pr-4 lg:px-4 lg:pr-0'>
                    <textarea
                        className='resize-none overflow-hidden min-h-[24px] max-h-[100px] hover:cursor-pointer text-base text-left mr-16 lg:w-[36rem] lg:mr-0'
                        rows={1}
                        aria-label="Todo"
                        value={editingValue}
                        onBlur={onBlur}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        onInput={(event) => onInput(event.target)}
                        // ref={textareaRef}
                        placeholder="Start typing here to add todo(s)"
                    />
                </div>
                <div className='items-end ml-0 mr-4 lg:ml-[14rem] hover:text-red-500 hover:cursor-pointer'>
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