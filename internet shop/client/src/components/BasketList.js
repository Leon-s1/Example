import {useContext} from "react";
import {AppContext} from "./AppContext.js";
import {Table} from "react-bootstrap";
import BasketItem from './BasketItem.js'

const BasketList = () => {
    const {basket} = useContext(AppContext)
    // Общая стоимость товаров в корзине
    const cost = basket.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <>
            {basket.length ? (
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
                    {basket.map(item => <BasketItem key={item.product_id} {...item} />)}
                    <tr>
                        <th colSpan='3'>Итого</th>
                        <th>{cost}</th>
                        <th>руб.</th>
                    </tr>
                    </tbody>
                </Table>
            ) : (
                    <p> Ваша корзина пуста </p>
            )}
        </>
    )
}

export default BasketList