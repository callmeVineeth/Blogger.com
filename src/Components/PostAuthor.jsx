import React from 'react'
import { Link } from 'react-router-dom'

function PostAuthor({avathar, authorName}) {
  return (
    <Link to={'/posts/users/'}  className=' text-decoration-none text-black'>
      <section className='d-flex flex-row align-content-center
     justify-content-start'>
          <div>
              <img src={avathar} alt='AuthorImage' className=' w-25'/>
          
          </div>
          <section className=' w-auto bg-info-subtle' style={{ width: '200px'}}>
            <strong className=' text-opacity-75'> By: {authorName}</strong>
            <small className=' opacity-50'>Upload time</small>
          </section>
      </section>
    </Link>
  )
}

export default PostAuthor
