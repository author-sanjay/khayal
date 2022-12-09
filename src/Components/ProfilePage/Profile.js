import React from 'react'
import Homeleft from '../Homepage/Homeleft'
import Profileright from './Profileright'

const Profile = () => {
  return (
    <div className="flex flex-col bg-hotorange" style={{width:"100%"}}>
      <div className="flex  justify-between">
        <Homeleft/>
        <Profileright/>
      </div>
      
    </div>
  )
}

export default Profile