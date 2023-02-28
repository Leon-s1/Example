import React from "react";
import { useState, useEffect } from 'react'
import { fetchBrands, deleteBrand } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
// import CreateBrand from '../components/CreateBrand.js'
// import UpdateBrand from "../components/UpdateBrand";
import EditBrand from '../components/EditBrand.js'

const AdminBrands = () => {
    const [brands, setBrands] = useState(null) // список загруженных брендов
    const [fetching, setFetching] = useState(true) // загрузка списка брендов с сервера
    // const [createShow, setCreateShow] = useState(false) // модальное окно создания-редактирования
    const [show, setShow] = useState(false) // модальное окно создания-редактирования
    // const [updateShow, setUpdateShow] = useState(false) // модальное окно редактирования
    // для обновления списка после добавления, редактирования, удаления — изменяем состояние
    const [change, setChange] = useState(false)
    // id бренда, который будем редактировать — для передачи в <UpdateBrand id={…} />
    // const [brand, setBrand] = useState(null)
    const [brandId, setBrandId] = useState(0)

    const handleCreateClick = () => {
        setBrandId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        // setBrand(id)
        setBrandId(id)
        // setUpdateShow(true)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteBrand(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Бренд «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

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
            {/*<Button onClick={() => setCreateShow(true)}>Создать бренд</Button>*/}
            <Button onClick={() => handleCreateClick()}>Создать бренд</Button>
            {/*<CreateBrand show={createShow} setShow={setCreateShow} setChange={setChange} />*/}
            {/*<UpdateBrand id={brand} show={updateShow} setShow={setUpdateShow} setChange={setChange} />*/}
            <EditBrand id={brandId} show={show} setShow={setShow} setChange={setChange} />

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
                                <Button variant="success" size="sm" onClick={() => handleUpdateClick(item.id)}>
                                    Редактировать
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(item.id)}>
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