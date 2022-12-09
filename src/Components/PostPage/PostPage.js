import React from 'react'
import Homeleft from '../Homepage/Homeleft'
import PostMiddel from './PostMiddel'
import PostRight from './PostRight'

const PostPage = () => {
  return (
    <div className="flex flex-col bg-hotorange" style={{width:"100%"}}>
      <div className="flex  justify-between">
    <Homeleft/>
    <PostMiddel/>
    <PostRight/>

      </div>
      
    </div>

  )
}

export default PostPage