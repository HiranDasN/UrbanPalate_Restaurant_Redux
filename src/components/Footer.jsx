import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <Row>
        <Col >
        <div style={{width:'100%',height:'300px',backgroundColor:'black'}} className='d-flex justify-content-center align-items-center flex-column'>
      <div className='footer d-flex justify-content-evenly align-items-evenly w-100'>
         <div className="website" style={{width:'400px'}}>
            <h4 className='mb-4' style={{paddingLeft:'10px',color:'white',fontWeight:'bold'}}><span className='text-warning'>URBAN </span>PALATE</h4>
            <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero illo expedita eum labore. Doloremque vel, ipsam mollitia perferendis ducimus eveniet nam aut autem modi sint maiores possimus</p>
         </div>
         <div className="links d-flex flex-column">
            <h4 style={{color:'white',fontWeight:'bold'}} className='mb-4'>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Home Page</Link>
            <Link to={''} style={{textDecoration:'none',color:'white'}} >Review Page</Link>
         </div>
         <div className="guides d-flex flex-column">
          <h4 style={{color:'white',fontWeight:'bold'}} className='mb-4'>Guides</h4>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
         </div>
         <div className="contact">
          <h4 style={{color:'white',fontWeight:'bold'}} className='mb-4'>Contact Us</h4>
          <div className="d-flex mb-4" >
            <input type="text" className='form-control text-dark bg-light w-75' placeholder='Enter your Email ID' />
            <button className='btn btn-success text-light ms-2' >Subscribe</button>
          </div>
          <div className="icons d-flex justify-content-evenly">
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          </div>
         </div>
      </div>
      <br />
      <p style={{color:'white'}}>Copyright © 2023 URBAN PALATE. Built With React.</p>
    </div>
        </Col>
    </Row>
  )
}

export default Footer