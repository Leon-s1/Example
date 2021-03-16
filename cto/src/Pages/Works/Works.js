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
        <Container className="container flex-column   ">
          <h2 className="text-center m-4">Наши работы</h2>

          <Row className="img m-4 foto-itm">
            <Col xs={10} sm={6} md={4}>
              <Image className="pt-4 " src={bmw} roundedCircle />
            </Col>
            <Col xs={10} sm={6} md={4}>
              <Image className="pt-4 " src={audi} roundedCircle />
            </Col>
            <Col xs={10} sm={6} md={4}>
              <Image className="pt-4 " src={mercedes} roundedCircle />
            </Col>
            <Col xs={10} sm={6} md={4}>
              <Image
                className="pt-4 text-center"
                src={landcruiser}
                roundedCircle
              />
            </Col>
          </Row>
        </Container>
        <div>Works</div>
      </>
    )
  }
}
