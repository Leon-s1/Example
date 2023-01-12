// const Shop = () => {
//     return <h1>Витрина</h1>
// }
//
// export default Shop

import {Container, Row, Col} from "react-bootstrap";
import CategoryBar from '../components/CategoryBar.js'
import BrandBar from  '../components/BrandBar.js'
import ProductList from '../components/ProductList.js'

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <CategoryBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
        )
}

export default Shop
