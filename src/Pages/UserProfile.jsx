import React from 'react'
import { Row , Col, Form } from 'react-bootstrap'
import profilePic from '../Images/st3.jpg'
import { MdEditSquare } from "react-icons/md";

function UserProfile() {
  return (
    <section className=' bg-light p-4 d-flex flex-column py-5 m-5 justify-content-center  align-items-center'>

      <div className=' w-50 d-flex flex-column align-items-center'>
        <p className=' bg-white p-2  rounded-3'>My posts</p>
       <div className=' position-relative d-flex align-items-center justify-content-center  shadow-sm'
        style={{ width:'118px', height:'118px', borderRadius:'360px', backgroundColor:'white'}}> 
        <img src={profilePic} className='' style={{ width:'100px', height:'100px', borderRadius:'360px'}} /> 
        <span className=' position-absolute  d-flex align-items-center justify-content-center' style={{ bottom:'0px', right:'20px', width:'30px', height:'30px', borderRadius:'360px',
         background:'black',zIndex:'2', cursor:'pointer'}}> 
        <MdEditSquare color='white' z={99}/> </span>
        </div>
        <h2 className=' text-center'>UserName</h2>
        <div className=' w-100 p-2  d-flex flex-column gap-2'>
        <Form.Control size="sm" type="text" placeholder="Name" />
        <Form.Control size="sm" type="text" placeholder="Email" />
        <Form.Control size="sm" type="text" placeholder="Total Posts" />
        <Form.Control size="sm" type="text" placeholder="Ratings" />
        </div>
      </div>
    </section>
  )
}

export default UserProfile
