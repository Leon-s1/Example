import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'
import BMW from './Works/img/'

export default class Works extends Component {
  render() {
    return (
      <>
        <Container>
          <h2 className="text-center m-4">Наши работы</h2>

          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="/" rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
              </Col>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
              </Col>
            </Row>
          </Container>
        </Container>
        <div>Works</div>
      </>
    )
  }
}
