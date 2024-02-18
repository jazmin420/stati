import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-lg-start text-light">
    <div className="container p-4">
      <h3 className="text-uppercase">Tapo Place</h3>
      <div className="row">
        <div className="col-lg-4">
          <strong><p>Opening Times</p></strong>
          <p>09:30 AM – 11:00 PM
Every Day</p>
        </div>
        <div className="col-lg-4">
          <strong><p>About Us</p></strong>
          <ul>
            <li>Community</li>
            <li>Support</li>
            <li>Help center</li>
            <li>Social media</li>
          </ul>
        </div>
        <div className="col-lg-4">
        <strong><p>Social Media</p></strong>
          <i className="fa-brands fa-facebook-f me-5" ></i>
          <i className="fa-brands fa-instagram me-5" ></i>
          <i className="fa-brands fa-x-twitter" ></i>
        
        </div>
      </div>
    </div>
    <div className="text-center p-3">
      © 2024 Copyright:
      <a className="text-light" href="#">TapoPlace</a>
    </div>
  </footer>
    </>

  )
}

export default Footer