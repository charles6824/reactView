import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const Bottom = () => {
    return (
      <div>
        <Container className='py-3'>
          <Row>
            <Col sm='12' md='6'>
              <Card className='shadow bg-ven text-center'>
                <Card.Body>
                  <h4><a href=''>VENDORS</a></h4>
                </Card.Body>
              </Card>
            </Col>
            <Col sm='12' md='6'>
              <Card className='shadow bg-ord text-center'>
                <Card.Body>
                  <h4><a href=''>ORDERS</a></h4>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
}

export default Bottom
