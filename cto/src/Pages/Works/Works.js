import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'
import bmw from './img/BMW.png'
import audi from './img/audi.png'
import mercedes from './img/mercedes.png'
import landcruiser from './img/landcruiser.png'

export default class Works extends Component {
  render() {
    return (
      <>
        <Container>
          <h2 className="text-center m-4">Наши работы</h2>

          <Row className="text-center m-4">
            <Col xs={6} md={4}>
              <Image src={bmw} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src={audi} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src={mercedes} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src={landcruiser} roundedCircle />
            </Col>
          </Row>
        </Container>
        <div>Works</div>
      </>
    )
  }
}
