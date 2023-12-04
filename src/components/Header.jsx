import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '../images/logo_2b4cf22967fd52e883c1a812bd88f253_3x.png'
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';
function Header() {
  const dispatch = useDispatch()
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"className='d-flex'>
            <img
              alt=""
              src={LogoImg}
              width="55"
              height="55"
              className="d-inline-block align-top"
            />{' '}
            <h5 className='mt-4 ms-2 text-light'><span className='text-warning'>Urban</span>Palate</h5>
          </Navbar.Brand>
          <form className="d-flex">
        <input onChange={(e)=>dispatch(search(e.target.value))} style={{color:'black'}} className="form-control me-sm-2 text-dark" type="search" placeholder="Search a neighborhood"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
        </Container>
      
</nav>
    </>
  )
}

export default Header