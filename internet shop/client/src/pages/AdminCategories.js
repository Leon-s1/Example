import { useState, useEffect, useContext } from 'react'
import { fetchCategories } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import CreateCategory from '../components/CreateCategory.js'

const AdminCategories = () => {
    const [categories, setCategories] = useState(null) // список загруженных категорий
    const [fetching, setFetching] = useState(true) // загрузка списка категорий с сервера

    useEffect(() => {
        fetchCategories()
            .then(
                data => setCategories(data)
            )
            .finally(
                () => setFetching(false)
            )
    }, [])

    if (fetching) {
        return <Spinner animation="border" />
    }

    return (
        <Container>
            <h1>Категории</h1>
            {categories.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <Button variant="success" size="sm" onClick={() => alert('Редактирование категории')}>
                                    Редактировать
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => alert('Удаление категории')}>
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            ) : (
                <p>Список категорий пустой</p>
            )}
        </Container>
    )
}

export default AdminCategories