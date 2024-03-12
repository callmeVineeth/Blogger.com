import React, { useState } from "react";
import { Form, FloatingLabel, Row,Col, Button } from "react-bootstrap";
import register from '../Styles/register.css'
import { Link } from "react-router-dom";

function Register() {

  const[message, setMessage] = useState("Welcome")
  const[userData, setUserData] = useState({
    userName: " ",
    email : " ",
    password : "",
    password2: ""
  })

  const {userName, email, password, password2} = userData;

  const changeInputHandler = (e) =>{
   console.log('input added')
   setUserData(prevState =>(prevState => {
    return { ...prevState,[e.target.name]: e.target.value}
   }
   ))
   

  }

  const  handleFormSubmit =()=>{
    console.log('form submitted')
    if(!userName||!email || !password || !password2){
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
        <h2>SignUp</h2>
        <p className="p-2 rounded-2 text-white bg-danger"> {message} </p>

        <form onSubmit={handleFormSubmit}>
          
          <FloatingLabel
            controlId="floatingInput"
            label="FullName"
            className="mb-3"
            >
            <Form.Control type="text" name="Username"  className="custom_input" placeholder="FullName" value={userName}
            onChange={changeInputHandler} />
          </FloatingLabel>

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

          <FloatingLabel
            controlId="floatingInputPasswd2"
            label="Confirm Password" 
            className="mb-3"
            >
            <Form.Control type="password"  name="password2"  className="custom_input" placeholder="password" value={password2}
            onChange={changeInputHandler} />
          </FloatingLabel>
          <Button type="submit">Register</Button>
        
        </form>
         </Col>
         <small>Already have an account ?
          <Link to='/login'>Login</Link> 

         </small>
      </Row>
    </section>
  );
}

export default Register;
