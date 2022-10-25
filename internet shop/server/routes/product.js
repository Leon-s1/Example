import express from 'express'
import ProductController from '../controllers/Product.js'
import ProductPropController from '../controllers/ProductProp.js'
// import authMiddleware from '../middleware/authMiddleware.js'
// import adminMiddleware from '../middleware/adminMiddleware.js'

const router = new express.Router()

// router.get('/getall', ProductController.getAll)
// router.get('/getone/:id([0-9]+)', ProductController.getOne)
// router.post('/create', ProductController.create)
// router.put('/update/:id([0-9]+)', ProductController.update)
// router.delete('/delete/:id([0-9]+)', ProductController.delete)

// список товаров выбранной категории и выбранного бренда
router.get('/getall/categoryId/:categoryId([0-9]+)/brandId/:brandId([0-9]+)', ProductController.getAll)
// список товаров выбранной категории
router.get('/getall/categoryId/:categoryId([0-9]+)', ProductController.getAll)
// список товаров выбранного бренда
router.get('/getall/brandId/:brandId([0-9]+)', ProductController.getAll)
// список всех товаров каталога
router.get('/getall', ProductController.getAll)
router.get('/getone/:id([0-9]+)', ProductController.getOne)

// router.post('/create', ProductController.create)
// router.put('/update/:id([0-9]+)', ProductController.update)
// router.delete('/delete/:id([0-9]+)', ProductController.delete)

// создать товар каталога — нужны права администратора
router.post('/create',
    // authMiddleware,
    // adminMiddleware,
    ProductController.create)
// обновить товар каталога  — нужны права администратора
router.put('/update/:id([0-9]+)',
    // authMiddleware,
    // adminMiddleware,
    ProductController.update)
// удалить товар каталога  — нужны права администратора
router.delete('/delete/:id([0-9]+)',
    // authMiddleware,
    // adminMiddleware,
    ProductController.delete)

/*
Свойства
 */

//Список свойств товара
router.get('/product/:productId([0-9]+)/property/getall', ProductPropController.getAll)
//одно свойство товара
router.get('/product/:productId([0-9]+)/property/getone/:id([1-9]+)', ProductPropController.getOne)
//создать свойство товара
router.post('/product/:productId([0-9]+)/property/create',
    // authMiddleware,
    // adminMiddleware,
    ProductPropController.create
)

// обновить свойство товара
router.put(
    '/product/:productId([0-9]+)/property/update/:id([0-9]+)',
    // authMiddleware,
    // adminMiddleware,
    ProductPropController.update
)
// удалить свойство товара
router.delete(
    '/product/:productId([0-9]+)/property/delete/:id([0-9]+)',
    // authMiddleware,
    // adminMiddleware,
    ProductPropController.delete
)


export default router



