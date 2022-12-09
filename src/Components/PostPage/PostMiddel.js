import { Avatar } from '@mui/material'
import React from 'react'

const PostMiddel = () => {
  return (
    <div className='flex flex-col bg-white w-2/4'>
    <div className="bg-white w-2/4" style={{ maxHeight: "100vh" }}>
  <div className="my-20" style={{marginLeft:"150px"}}>
    <div className="flex flex-col mr-20">

      <spam className="text-[35px]" style={{border:"none",outlineWidth:"0px"}} >Title</spam> 
      <div className='mt-5 flex flex-row w-1/2'>
        <Avatar/>
        <span className='text-[25px] ml-5'>Name</span>
        <button className='bg-black text-white px-3 rounded-[20px] mx-5'>Follow</button>
      </div>
      <p className="text-[15px] mt-5 w-full"  style={{border:"none", outlineWidth:"0px", height:"83vh"}} >hgfghj</p>
    </div>
  </div>
</div>
</div>
  )
}

export default PostMiddel