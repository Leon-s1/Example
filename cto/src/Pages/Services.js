import React, { Component } from 'react'
import {
  Col,
  Container,
  Nav,
  NavItem,
  Row,
  TabContainer,
} from 'react-bootstrap'

const tabs = [
  { key: 'first', service: 'Компьютерная диагностика' },
  { key: 'second', service: 'Шиномонтаж' },
  { key: 'third', service: 'Сход-развал' },
  // { key: 'fourth', service: },
  // { key: 'fifth', service: },
]

export default function Services() {
  return (
    // let toHTML = (keys, services) => `
    <Container>
      <TabContainer id="left-tabs-container" defaultActiveKey="first">
        <Row>
          {tabs.map((tab, index) => (
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <NavItem>
                  <Nav.Link eventKey={tab.key}>{tab.service}</Nav.Link>
                </NavItem>
              </Nav>
            </Col>
          ))}
        </Row>
      </TabContainer>
    </Container>
    // `
  )
}
