import React from 'react'
import { Card,Button, CardBody } from 'react-bootstrap'
import PostAuthor from './PostAuthor'

function PostItem({title, description, thumbnail,avathar, authorName, upload_time}) {
  return (
    
    <Card style={{ width: '20rem' }} className=' rounded-4'>
      <div className=' p-2'>
      <Card.Img variant="top" src={thumbnail} alt='thumbnail' className=' rounded-4' />
       <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className=' opacity-75'>
         {description}
        </Card.Text>
        <PostAuthor avathar={avathar} authorName={authorName} upload_time={upload_time}/>
        
       </Card.Body>
      </div>
    </Card>

      
    
  )
}

export default PostItem
