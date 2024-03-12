import React from 'react'
import { Row , Col, Form } from 'react-bootstrap'
import profilePic from '../Images/st3.jpg'
function UserProfile() {
  return (
    <section className=' bg-light p-4 d-flex flex-column py-5 m-5 justify-content-center  align-items-center'>

      <div className=' w-50 d-flex flex-column align-items-center'>
       <div className=' d-flex align-items-center justify-content-center  shadow-sm'  style={{ width:'118px', height:'118px', borderRadius:'360px', backgroundColor:'white'}}> 
        <img src={profilePic} className='' style={{ width:'100px', height:'100px', borderRadius:'360px'}} /> </div>
        <h2 className=' text-center'>UserName</h2>
        <div className=' w-100 p-2  d-flex flex-column gap-2'>
        <Form.Control size="sm" type="text" placeholder="Small text" />
        <Form.Control size="sm" type="text" placeholder="Small text" />
        <Form.Control size="sm" type="text" placeholder="Small text" />
        <Form.Control size="sm" type="text" placeholder="Small text" />
        </div>
      </div>
    </section>
  )
}

export default UserProfile
