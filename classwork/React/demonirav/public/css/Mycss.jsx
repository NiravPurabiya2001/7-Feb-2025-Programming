import React from 'react'
import './style.css';

function Mycss() {
    const mystyle={backgroundColor:"green",color:"white"}
  return (
    <div>
        <h1 style={mystyle}>hello</h1>
        <h1 className='box'>hello</h1>

    </div>
  )
}

export default Mycss