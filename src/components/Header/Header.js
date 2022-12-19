import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import img from './icon.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';
import './Header.css'

import TogglesMain from '../Toggles/TogglesMain';

const Header = () => {
  const { user, logOut } = useContext(authContext)
  const HandleClick = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  return (
    <Navbar collapseOnSelect expand="lg"variant="light">
      <Container>
        <Navbar.Brand>
          <Image roundedCircle src={img} style={{ height: '40px' }}></Image> <span className=' fw-bold'>Programming School</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='link-decoration me-3' to="/" >Home</Link>
            <Link className='link-decoration me-3' to="/courses">Courses</Link>
            <Link className='link-decoration me-3' to="/blog" >Blog</Link>
          </Nav>
          <Nav>
            {
              user?.uid ? <div>
                <button onClick={HandleClick} className='btn btn-info me-3 text-light'>SignOut</button>
                <Image title={user?.displayName} roundedCircle src={user?.photoURL} style={{ height: '40px', width: '40px' }}></Image>
              </div> :
                <div>
                  <button className='btn me-3'><Link className='link-decoration fw-bold'  to='/signIn'>Sign in</Link></button>
                  <button className='btn me-3'><Link className='link-decoration fw-bold' to='/signUp'>SignUp</Link></button>
                </div>
            }


            <div>
              <TogglesMain></TogglesMain>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;