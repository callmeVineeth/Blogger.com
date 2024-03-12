import React from 'react'

function AuthorItem({authorPic,name, posts, joinDate}) {
  return (
    <div className=' border-2 bg-white p-2 gap-1 d-flex flex-row align-items-center m-3 rounded-3 shadow-lg'  style={{ maxWidth:'450px'}}>
        <img src={authorPic} alt='AuthorPic' style={{ maxWidth:'80px', minHeight:'80px', borderRadius:'360px'}}  className=' object-fit-cover'/>
        <section className=' p-2'>
          <strong style={{ letterSpacing:'2px'}}> {name} </strong>
          <p className=' opacity-75'> {posts} </p>
          <span className=' opacity-75'> <small>Joined on </small> {joinDate} </span>
        </section>
    </div>
  )
}

export default AuthorItem
