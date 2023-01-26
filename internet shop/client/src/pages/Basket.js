// const Basket = () => {
//     return <h1>Товар</h1>
// }
//
// export default Basket
import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { Table } from "react-bootstrap";
// import BasketList from '../components/BasketList.js'
import BasketItem from "../components/BasketItem";
// import {Container} from "react-bootstrap";
import { observer } from "mobx-react-lite";

// const Basket = () => {
//     return (
//         <Container>
//             <h1>Корзина</h1>
//             <BasketList/>
//         </Container>
//     )
// }
    const BasketList = observer(() => {
        const { basket } = useContext(AppContext)
        return (
            <>
                {basket.count ? (
                    <Table bordered hover size='sm' className='mt-3'>
                        <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Количество</th>
                                <th>Цена</th>
                                <th>Сумма</th>
                                <th>Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basket.products.map(item => <BasketItem key={item.id} {...item} />)}
                            <tr>
                                <th colSpan='3'>Итого</th>
                                <th>{basket.sum}</th>
                                <th>руб.</th>
                            </tr>
                        </tbody>
                    </Table>
                ) : (
                    <p>Ваша корзина пуста</p>
                )}
            </>
        )
    })


export default BasketList