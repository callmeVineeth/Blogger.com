import React from 'react'
import { Row,Col } from 'react-bootstrap'

function DashboardItem({postImg, details}) {
  return (
    <div>
        <Row  className=' bg-info w-50 p-2 m-2 d-flex flex-row justify-content-between align-items-center'>
           <Col>
            <img src={postImg}  className=' w-25' alt='postsImage' />
            <p>{details}</p>
           </Col>

           <Col>
            <button className=' m-1'>Edit</button>
            <button className=' m-1'>Delete</button>
           </Col>
        </Row>
      
    </div>
  )
}

export default DashboardItem
