import React from 'react'
import { Link } from 'react-router-dom'

function PostAuthor({avathar, authorName, upload_time}) {
  return (
    <Link to={'/posts/users/'}  className=' text-decoration-none text-black'>
      <section className='d-flex flex-row gap-2 align-content-center
     justify-content-start'>
          <div className='' style={{ width:'40px'}}>
              <img src={avathar} alt='AuthorImage' className=' rounded-2' style={{ width: '100%'}}/>
          
          </div>
          <section className=' w-auto d-flex flex-column mt-1 '>
            <strong className=' text-opacity-75'> {authorName}</strong> 
            <small className='  opacity-50'>{upload_time}</small>
          </section>
      </section>
    </Link>
  )
}

export default PostAuthor
