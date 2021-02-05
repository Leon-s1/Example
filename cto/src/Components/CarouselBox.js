import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import diagnostika from '../../src/Assets/diagnostika.jpg'
import dvig2 from '../../src/Assets/dvig02.jpg'
import maslo3 from '../../src/Assets/maslo03.jpg'
import shinomontag from '../../src/Assets/shinomontag.jpg'
import maslo from '../../src/Assets/maslo.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Container>
        <h2>Качественный ремонт автомобилей!</h2>
        <Carousel className="wrap mt-4">
          <Carousel.Item>
            <img
              className="d-block w-100 m-auto thumbnail"
              src={diagnostika}
              alt="diagnostika"
            />
            <Carousel.Caption>
              <h3>Диагностика автомобиля</h3>
              <p>Диагностика автомобиля со скидкой 50 %</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 m-auto thumbnail"
              src={shinomontag}
              alt="dvig"
            />
            <Carousel.Caption>
              <h3>Шиномонтаж</h3>
              <p>Бесплатный шиномонтаж</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 m-auto thumbnail"
              src={maslo}
              alt="dvig"
            />
            <Carousel.Caption>
              <h3>Замена масла</h3>
              <p>Быстрая замена масла</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  }
}
