import { Product as ProductMapping } from "./mapping.js";
import { ProductProp as ProductPropMapping } from "./mapping.js";
import FileService from '../services/File.js'
import AppError from "../errors/AppError.js";
// import {where} from "sequelize";
// import {JSON, json} from "sequelize";

class Product {
    // async getAll(params) {
    //добавляем возможность запрашивать только часть товаров
    async getAll(options) {
        const {categoryId, brandId, limit, page} = options
        const offset = (page - 1) * limit
        const where = {}
        if (categoryId) where.categoryId = categoryId
        if (brandId) where.brandId = brandId
        //Добавляем новый метод findAndCountAll
        // const products = await ProductMapping.findAll(where)
        const products = await ProductMapping.findAndCountAll({
            where,
            limit,
            offset,
        //    для каждого товара получаем бренд и категорию
            include: [
                {model: BrandMapping, as: 'brand'},
                {model: CategoryMapping, as: 'category'}
            ]
        })

        return products
    }

    async getOne(id) {
        // const product = await ProductMapping.findByPk(id)
        // const product = await ProductMapping.findOne({
        const product = await ProductMapping.findByPk(id, {
            include: [
                {model: ProductPropMapping, as: 'props'},
                {model: BrandMapping, as: 'brand'},
                {model: CategoryMapping, as: 'category'},
                ]
        })
        if (!product) {
            throw new Error('Товар не найден в БД')
        }
        return product
    }

    async create(data, img) {
        // поскольку image не допускает null, задаем пустую строку
        const image = FileService.save(img) ?? ''
        const {name, price, categoryId = null, brandId = null} = data
        const product = await ProductMapping.create({name, price, image, categoryId, brandId})
        // добавляем свойства товара в таблицу ProductProp
        if (data.props) { //если свойства товара имеются
            const props = JSON.parse(data.props)
            for (let prop of props) {
                await ProductPropMapping.create({
                    name: prop.name,
                    value: prop.value,
                    productId: product.id
                })
            }
        }
        return product
    }

    async update(id, data, img) {
        const product = await ProductMapping.findByPk(id)
        if (!product) {
            throw new Error('Товар не найден в БД')
        }
        // пробуем сохранить изображение, если оно было загружено
        const file = FileService.save(img)
        // если загружено новое изображение — надо удалить старое
        if (file && product.image) {
            FileService.delete(product.image)
        }
        // подготавливаем данные, которые надо обновить в базе данных
        const {
            name = product.name,
            price = product.price,
            categoryId = product.categoryId,
            brandId = product.brandId,
            image = file ? file : product.image
        } = data
        await product.update({name, price, image, categoryId, brandId})
        return product
    }

    async delete(id) {
        const product = await ProductMapping.findByPk(id)
        if (!product) {
            throw new Error('Товар не найден в БД')
        }
        await product.destroy()
        return product
    }
}

export default new Product()