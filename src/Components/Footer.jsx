import React from 'react'
import { Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import footer from '../Styles/footer.css'

function Footer() {
  return (
    <footer className=' bg-dark '>
      <Container  className=' bg py-5 footer'> 
        <Nav className=' justify-content-evenly footer-links gap-1'>
          <Nav.Link className='' as={Link} to="posts/categories/sports" >Sports</Nav.Link>
          <Nav.Link className='' as={Link} to="posts/categories/technology" >Technology</Nav.Link>
          <Nav.Link className='' as={Link} to="posts/categories/agriculture" >Agriculture</Nav.Link>
          <Nav.Link className='' as={Link} to="posts/categories/science" >Science</Nav.Link>
          <Nav.Link className='' as={Link} to="posts/categories/politics" >Politics</Nav.Link>
          <Nav.Link className='' as={Link} to="posts/categories/career" >Career</Nav.Link>
          <Nav.Link className='' as={Link} to="posts/categories/war" >War</Nav.Link>           
        </Nav>  
      </Container>
      <div className=' text-center  text-white py-2'>
       All Copyright reserved

      </div>
    </footer>
  )
}

export default Footer
