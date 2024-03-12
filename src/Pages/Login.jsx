import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'
import { FloatingLabel,Button, Form,Col,Row } from 'react-bootstrap'

function Login() {    
  const[message, setMessage] = useState("Welcome")
  const[userData, setUserData] = useState({
    email : " ",
    password : ""
  })

  const {email, password} = userData;

  const changeInputHandler = (e) =>{
   console.log('input added')
   setUserData(prevState =>(prevState => {
    return { ...prevState,[e.target.name]: e.target.value}
   }
   ))
   

  }

  const  handleFormSubmit =()=>{
    console.log('form submitted')
    if(!email || !password ){
      setMessage('please fill up all the details')
    }
    else{
      setMessage('Form Submitted Sucessfully')
    }
    
  }

  return (
    <section className=" ">
      <Row className="  w-100 p-2 text-center  d-flex  justify-content-center align-content-center p-5 ">
        <Col xs={10} md={6} lg={6} className=" bg-body-secondary m-5 p-4 rounded-4 border-2 border-black">
        <h2>Login</h2>
        <p className="p-2 rounded-2 text-white bg-danger"> {message} </p>

        <form onSubmit={handleFormSubmit}>
          
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email Address"
            className="mb-3"
            >
            <Form.Control type="email" name="email"  className="custom_input" placeholder="name@example.com" value={email}
            onChange={changeInputHandler} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
            <Form.Control type="password"  name="password" className="custom_input" placeholder="Password"  value={password}
            onChange={changeInputHandler}/>
          </FloatingLabel>

          <Button type="submit"> Login </Button>
        
        </form>
         </Col>
         <small>Don't have an account? Create one 
          <Link to='/register'>Create</Link> 

         </small>
      </Row>
    </section>
  );
}
export default Login
