import React from 'react'
import {
  Navbar,
  Container,
  Image,
  Nav,
} from 'react-bootstrap';

const FootNav = () => {
    return (
      <div className='d-block d-md-none'>
        <Navbar bg='dark' variant='dark' fixed='bottom'>
          <Container>
            <Navbar.Brand href='/'>
              <i className='fa fa-home fa-2x'></i>
            </Navbar.Brand>
            <Nav>
              <Nav.Link
                href='/cart' className='me-auto'>
                    <Image src='/images/logo-BO.png' width='70px' />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href='/cart'
                className='text-white'
                style={{ position: 'relative' }}
              >
                <i className='fa fa-shopping-cart fa-2x mm'></i>{' '}
                <span className='cart'>1</span>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default FootNav
