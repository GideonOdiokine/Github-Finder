import React,{useState} from 'react';

import './Input.css';


const Input = () => {
    const [Input, setInput] = useState('');


    const addTodo=()=>{
        console.log(`Adding ${Input}`)

    }
    return (
        <div className="input">
            <input type="text" value={Input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input;
