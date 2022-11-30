import React from 'react';
import { useState } from 'react';

const Keypress = () => {
    
    const [val, setVal] = useState()
    const change = event => {
        setVal(event.target.value)
    }
const handleKeyPress = (e) => {
    if(e.key==='Enter') {
        alert('enter' + val);
    }
}
    return (
       <input type='text' onKeyPress ={handleKeyPress} value= {val} onChange={change} /> 
      )
  }   

export default Keypress;
