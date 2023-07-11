import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Dashboard.css"

const Dashboard = (props) => {

    const [inputText, setInputText] = useState('')
    const handleEnterPress = (e) => {
        if (e.keyCode ===13){
            props.addList(inputText)
            setInputText("")
        }
    }

  return (
    <div className='input-container'>
   <input value={inputText} onKeyDown={handleEnterPress} onChange={e => {setInputText(e.target.value)}} type="text" className='input-box-todo' placeholder='Enter the User Name'/>
   <button onClick={()=> {props.addList(inputText) 
   setInputText("")
   }} 
   
   className='add-btn'>+</button>
   
    </div>
  );
};

export default Dashboard;
