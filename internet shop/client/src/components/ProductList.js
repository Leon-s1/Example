import { useContext } from 'react'
import { AppContext } from './AppContext.js'
import { Row } from 'react-bootstrap'
import ProductItem from './ProductItem.js'

const ProductList = () => {
    const { products } = useContext(AppContext)

    return (
        <Row className="d-flex">
            {products.map(item =>
                <ProductItem key={item.id} data={item}/>
            )}
        </Row>
    );
}

export default ProductList