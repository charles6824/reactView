import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Content from './components/Content'
import FootNav from './components/FootNav'

const App = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.615),rgba(0,0,0,0.615)),url('/images/bg-BO.jpg')`,
      }}
    >
      <Container className='bg-bo'>
        <Row className='justify-content-center'>
          <Col sm='12'>
            <Content />
            <FootNav/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App
