import React from 'react'
import Uploadleft from './Uploadleft'
import Uploadright from './Uploadright'

const Upload = () => {
  return (
    <div className="flex flex-col bg-hotorange" style={{width:"100%"}}>
      <div className="flex  justify-between">
        <Uploadleft/>
        <Uploadright/>
      </div>
      
    </div>
  )
}

export default Upload