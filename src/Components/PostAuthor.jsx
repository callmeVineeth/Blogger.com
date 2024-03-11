import React from 'react'
import { Link } from 'react-router-dom'

function PostAuthor({avathar, authorName, upload_time}) {
  return (
    <Link to={'/posts/users/'}  className=' text-decoration-none text-black'>
      <section className='d-flex flex-row align-content-center
     justify-content-start'>
          <div className=' w-25'>
              <img src={avathar} alt='AuthorImage' className='' style={{ width: '100%'}}/>
          
          </div>
          <section className=' w-auto bg-info-subtle d-flex '>
            <strong className=' text-opacity-75'> {authorName}</strong> <br/>
            <small className=' opacity-50'>{upload_time}</small>
          </section>
      </section>
    </Link>
  )
}

export default PostAuthor
