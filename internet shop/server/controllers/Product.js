// import { Product as ProductMapping } from "../models/mapping.js";
import ProductModel from '../models/Product.js'
import AppError from "../errors/AppError.js"
import FileService from '../services/File.js'


class Product {

    async getAll(req, res, next) {
        try {
            //добавляем возможность запрашивать только часть товаров
            const {categoryId = null, brandId = null} = req.params
            let {limit, page} = req.query

            limit = limit && /[0-9]+/.test(limit) && parseInt(limit) ? parseInt(limit) : 3

            page = page && /[0-9]+/.test(page) && parseInt(page) ? parseInt(page) : 1
            const options = {categoryId, brandId, limit, page}
            const products = await ProductModel.getAll(options)
            // const products = await ProductModel.getAll(req.params)
            // const products = await ProductMapping.findAll()
            res.json(products)
        } catch (e) {
            next(AppError.badRequest(e.message))
        }
    }
    //***************************************
    //     if (true) {
    //         return next(AppError.badRequest('Этот запрос не удалось обработать'))
    //     }
    //     res.status(200).send('Список всех товаров')
    // }
    //***************************************
    // async getAll(req, res) {
    //     res.status(200).send('Список всех товаров')
    // }
    //
    //***************************************

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id товара')
            }
            const product = await ProductModel.getOne(req.params.id)
            // if (!product) {
            //     throw new Error('Товар не найден в БД')
            // }
            res.json(product)
        } catch (e) {
            next(AppError.badRequest((e.message)))
        }
        // res.status(200).send('Получение одного товара')
    }


    async create(req, res, next) {
        try {
            // console.log(req.body)
            // console.log(req.files)
            // поскольку image не допускает null, задаем пустую строку
            // const product = await ProductMapping.create({name, price, image, categoryId, brandId})
            const product = await ProductModel.create(req.body, req.files?.image)
            // const image = FileService.save(req.files?.image) ?? ''
            // const {name, price, categoryId = null, brandId = null} = req.body
            res.json(product)
        } catch(e) {
        next(AppError.badRequest(e.message))
        // res.status(200).send('Создание нового товара')
        }
    }


    async update(req, res, next) {
        try {
            if (!res.params.id) {
                throw new Error('Не указан id товара')
            }
            // const product = await ProductMapping.findByPk(req.params.id)
            const product = await ProductModel.update(req.params.id, req.body, req.files?.image)
            // if (!product) {
            //     throw new Error('Товар не найден в БД')
            // }
            // const name = req.body.name ?? product.name
            // const price = req.body.price ?? product.price
            // await product.update({name, price})
            res.json(product)
        } catch (e) {
            next(AppError.badRequest(e.message))
        }
        // res.status(200).send('Обновление товара')
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id товара')
            }
            // const product = await ProductMapping.findByPk(req.params.id)
            const product = await ProductModel.delete(req.params.id)
            // if (!product) {
            //     throw new Error('Товар не найден в БД')
            // }
            // await product.destroy()
            res.json(product)
        } catch (e) {
            next(AppError.badRequest(e.message))

        }
        // res.status(200).send('Удаление товара')
    }
}

export default new Product()

