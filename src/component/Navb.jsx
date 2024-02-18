import React from 'react'
import './Navb.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navb() {
  return (
    <>
    <div className='bg-home'>
      <Navbar collapseOnSelect expand="lg" className='nav-div'  >
        <h2>Tapo </h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="" className='a-tag me-5'>Home</Nav.Link>
            <Nav.Link href="" className='a-tag me-5'>Menu</Nav.Link>
            <Nav.Link href="" className='a-tag me-5'>Reservation</Nav.Link>
            <Nav.Link href="" className='a-tag me-5'>Gallery</Nav.Link>
            <Nav.Link href="" className='a-tag me-5'>About</Nav.Link>
            <Nav.Link href="" className='a-tag me-5'>Blog</Nav.Link>
            <Nav.Link href="" className='a-tag'>Contact</Nav.Link>
            <Nav.Link href="">
            <i className="fa-brands fa-facebook-f me-2"></i>
            <i className="fa-brands fa-instagram me-2" ></i>
            <i className="fa-brands fa-x-twitter" ></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1 id='h1'>Welcome to <span>TAPO Place</span></h1>
      <div className='button-center'>
        <button id='button'>Look Menu</button></div>
    </div>
    </>
  )
}

export default Navb