import { useState, useEffect } from 'react'
import { fetchBrands } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import CreateBrand from '../components/CreateBrand.js'

const AdminBrands = () => {
    const [brands, setBrands] = useState(null) // список загруженных брендов
    const [fetching, setFetching] = useState(true) // загрузка списка брендов с сервера
    const [show, setShow] = useState(false) // модальное окно создания-редактирования
    // для обновления списка после добавления-редактирования, нужно изменить состояние
    const [change, setChange] = useState(false)

    useEffect(() => {
        fetchBrands()
            .then(
                data => setBrands(data)
            )
            .finally(
                () => setFetching(false)
            )
    }, [change])

    if (fetching) {
        return <Spinner animation="border" />
    }

    return (
        <Container>
            <h1>Бренды</h1>
            <Button onClick={() => setShow(true)}>Создать бренд</Button>
            <CreateBrand show={show} setShow={setShow} setChange={setChange} />
            {brands.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {brands.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <Button variant="success" size="sm" onClick={() => alert('Редактирование бренда')}>
                                    Редактировать
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => alert('Удаление бренда')}>
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            ) : (
                <p>Список брендов пустой</p>
            )}
        </Container>
    )
}

export default AdminBrands