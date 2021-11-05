import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Top = () => {
  return (
    <div>

        <Row className='px-4'>
          <Col sm='4' md='8'>
              <p className='mt-5 tb'>30, Aviation Estate,Oshodi Lagos State.</p>
          </Col>
          <Col sm='8' md='4'>
            <Card className='shadow bg-disp mt-3 text-center'>
              <Card.Body>
                <p className='text-white '>Hi Jenny</p>
                <h2 className='text-wel'>WELCOME</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  );
};

export default Top;
