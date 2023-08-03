import React from 'react'
import Post from "../post/Post";
import "./posts.css";



const Posts = ({posts}) => {

  return (
    <div className="posts">

     



      {

        

        

        // posts.forEach( (p)=> {
        //   <Post post={p}/>
          
        // })
        
       
      
      
      posts.map((p) => (
        <Post post={p}/>

       
      ))
      
      
      
      
      }




    </div>

  )
}

export default Posts
