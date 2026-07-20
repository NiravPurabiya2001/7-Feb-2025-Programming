import React from 'react'

function jsx() {

    const name = "nirav";
    const element = <h1>hello</h1>
    const element2 = <h1>hello{5+5}</h1>
  return (
    <div>
        <h1>{name}</h1>
        <h1>{element}</h1>
        <h1>{element2}</h1>


    </div>
  )
}

export default jsx