import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Slider = () => {
    return (
      <div>
        <Container className='mt-3'>
            <h6 className='text-white font-weight-bold text-center'>Nearby Restaurants</h6>
          <Row className='justify-content-center'>
            <Col sm='12'>
              <Carousel>
                <Carousel.Item>
                  <a href='/'>
                    <img
                      className='d-block w-100'
                      src='./images/intel_p.jpg'
                      alt=''
                    />
                  </a>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='./images/intel_p.jpg'
                    alt=''
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='./images/intel_p.jpg'
                    alt=''
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Slider
