import { useContext } from 'react'
import { AppContext } from './AppContext.js'
import { ListGroup } from 'react-bootstrap'

const CategoryBar = () => {
    const { categories } = useContext(AppContext)
    return (
        <ListGroup>
            {categories.map(item =>
                <ListGroup.Item
                    key={item.id}
                    active={false}
                    onClick={() => alert('Фильтрация, только товары категории')}
                    style={{cursor: 'pointer'}}
                >
                    {item.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}

export default CategoryBar