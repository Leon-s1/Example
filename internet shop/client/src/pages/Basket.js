// const Basket = () => {
//     return <h1>Товар</h1>
// }
//
// export default Basket

import BasketList from '../components/BasketList.js'
import {Container} from "react-bootstrap";

const Basket = () => {
    return (
        <Container>
            <h1>Корзина</h1>
            <BasketList/>
        </Container>
    )
}

export default Basket