import React from 'react';
import Keypress from './Keypress';

const Events = () => {
    
const onClick = () => {
    alert('clicked!')
}
    return (
        <>
       <button onClick={onClick}>click me</button> 
       < Keypress />
       </>
      )
  }   

export default Events;