import React, { Component } from 'react'
import {
  Col,
  Container,
  Nav,
  NavItem,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap'
import Diagnostika from './Services/Diagnostika'
// import Diag from './Services/Diag.txt'

const tabs = [
  { key: 'first', service: 'Компьютерная диагностика' },
  { key: 'second', service: 'Двигатель' },
  { key: 'third', service: 'Трансмиссия' },
  { key: 'fourth', service: 'Ходовая и рулевое управление' },
  { key: 'fifth', service: 'Тормозная система' },
  { key: 'sixth', service: 'Сход-развал' },
  { key: 'seventh', service: 'Слесарный ремонт' },
  { key: 'eighth', service: 'Ремонт генератора и стартера' },
  { key: 'ninth', service: 'Замена масла и ТО' },
  { key: 'tenth', service: 'Система охлаждения и отопления' },
  { key: 'eleventh', service: 'Шиномонтаж' },
]

export default function Services() {
  return (
    <Container>
      <TabContainer id="left-tabs-container" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            {tabs.map((tab) => (
              <Nav variant="pills" className="flex-column mt-2">
                <NavItem>
                  <Nav.Link eventKey={tab.key}>{tab.service}</Nav.Link>
                </NavItem>
              </Nav>
            ))}
          </Col>
          <Col sm={9}>
            <TabContent className="mt-3">
              <TabPane eventKey="first">
                <Diagnostika />
              </TabPane>
              <TabPane eventKey="second">{/* <Diag /> */}</TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}
