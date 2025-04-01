
import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

// Child 1 - rollerCoatster - Rules and Tickets
// Child 2 - merryGoRound - Rules and Tickets


function Parent1() {


  return (
    <>
    <div className='parent'>Parent1 </div>
       <Child1  />
       <Child2 />
    </>
  )
}

export default Parent1
