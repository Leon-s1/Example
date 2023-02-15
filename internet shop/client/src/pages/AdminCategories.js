import { useState, useEffect } from 'react'
import { fetchCategories, deleteCategory } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
// import CreateCategory from '../components/CreateCategory.js'
// import UpdateCategory from "../components/UpdateCategory";
import EditCategory from '../components/EditCategory.js'

const AdminCategories = () => {
    const [categories, setCategories] = useState(null) // список загруженных категорий
    const [fetching, setFetching] = useState(true) // загрузка списка категорий с сервера
    const [show, setShow] = useState(false) // модальное окно создания-редактирования
    // const [createShow, setCreateShow] = useState(false) // модальное окно создания категории
    // const [updateShow, setUpdateShow] = useState(false) // модальное окно редактирования
    // для обновления списка после добавления-редактирования, нужно изменить состояние
    const [change, setChange] = useState(false)
    // id категории, которую будем редактировать — для передачи в <UpdateCategory id={…} />
    const [categoryId, setCategoryId] = useState(null)

    const handleCreateClick = () => {
        setCategoryId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        // setCategory(id)
        setCategoryId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteCategory(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Категория «${data.name}» удалена`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchCategories()
            .then(
                data => setCategories(data)
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

            {/*<h1>Категории</h1>*/}
            {/*<Button onClick={() => setShow(true)}>Создать категорию</Button>*/}
            {/*<CreateCategory show={show} setShow={setShow} setChange={setChange} />*/}
            <h1>Категории</h1>
            {/*<Button onClick={() => setCreateShow(true)}>Создать категорию</Button>*/}
            {/*<CreateCategory show={createShow} setShow={setCreateShow} setChange={setChange} />*/}
            {/*<UpdateCategory id={category} show={updateShow} setShow={setUpdateShow} setChange={setChange} />*/}
            <Button onClick={() => handleCreateClick()}>Создать категорию</Button>
            <EditCategory id={categoryId} show={show} setShow={setShow} setChange={setChange} />

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
                                <Button variant="success" size="sm" onClick={() => handleUpdateClick(item.id)}>
                                {/*<Button variant="success" size="sm" onClick={() => alert('Редактирование категории')}>*/}
                                    Редактировать
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(item.id)}>
                                {/*<Button variant="danger" size="sm" onClick={() => alert('Удаление категории')}>*/}
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