// const Shop = () => {
//     return <h1>Витрина</h1>
// }
//
// export default Shop

import {Container, Row, Col, Spinner} from "react-bootstrap";
import CategoryBar from '../components/CategoryBar.js'
import BrandBar from  '../components/BrandBar.js'
import ProductList from '../components/ProductList.js'
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/AppContext.js";
import { fetchCategories, fetchBrands, fetchAllProducts } from "../http/catalogAPI.js";
import { observer } from "mobx-react-lite";
import { useLocation } from 'react-router-dom'

const Shop = observer(() => {
    const { catalog } = useContext(AppContext)

    const [categoriesFetching, setCategoriesFetching] = useState(true)
    const [brandsFetching, setBrandsFetching] = useState(true)
    const [productsFetching, setProductsFetching] = useState(true)

    useEffect(() => {
        fetchCategories()
            .then(data => catalog.categories = data)
            .finally(() => setCategoriesFetching(false))

        fetchBrands()
            .then(data => catalog.brands = data)
            .finally(() => setBrandsFetching(false))

        fetchAllProducts(null, null, 1, catalog.limit)
            .then(data => {
                catalog.products = data.rows
                catalog.count = data.count
            })
            .finally(() => setProductsFetching(false))
    }, [])

    const location = useLocation()
    useEffect(() => {
        if (location.state) {
            if (location.state.category !== catalog.category) {
                catalog.category = location.state.category
            }
            if (location.state.brand !== catalog.brand) {
                catalog.brand = location.state.brand
            }
            if (location.state.page !== catalog.page) {
                catalog.page = location.state.page
            }
        } else  {
            catalog.category = null
            catalog.brand = null
            catalog.page = 1
        }
        // eslint-disable-next-line
    }, [location.state])

    useEffect(() => {
        setProductsFetching(true)
        fetchAllProducts(catalog.category, catalog.brand, catalog.page, catalog.limit)
            .then(data => {
                catalog.products = data.rows
                catalog.count = data.count
            })
            .finally(() => setProductsFetching(false))
    }, [catalog.category, catalog.brand, catalog.page])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3} className='mb-3'>
                    {categoriesFetching ? (
                        <Spinner animation='border'/>
                    ) : (
                        <CategoryBar/>
                    )}
                </Col>
                <Col md={9}>
                    <div>
                        {brandsFetching ? (
                            <Spinner animation='border'/>
                        ) : (
                            <BrandBar/>
                        )}
                    </div>
                    <div>
                        {productsFetching ? (
                            <Spinner animation="border" />
                        ) : (
                            <ProductList />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
