import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ErrorPage() {
  const myStyles = {
    "font-weight":'Bold',
    "font-size" : "5vw",
    "text-align" : "center",
    "height":"100vh",
    "display":"flex",
    "flex-direction": "Column",
    "align-items" : "center",
    "justify-content" : "center"
  }
  return (
    <div style={myStyles} className=' '>
      <Button as={Link} to='/'> Go back to Home</Button>
      <strong>Page not found</strong>
    </div>
  )
}

export default ErrorPage
