// class Brand {
//     async getAll(req, res) {
//         res.status(200).send('Список всех брендов')
//     }
//
//     async getOne(req, res) {
//         res.status(200).send('Получение одного бренда')
//     }
//
//     async create(req, res) {
//         res.status(200).send('Создание нового бренда')
//     }
//
//     async update(req, res) {
//         res.status(200).send('Обновление бренда')
//     }
//
//     async delete(req, res) {
//         res.status(200).send('Удаление бренда')
//     }
// }
//
// export default new Brand()
//************************************************************
//Реализуем методы контроллера Бренд
// import { Brand as BrandMapping } from '../models/mapping.js'
import  BrandModel  from '../models/Brand.js'
import AppError from '../errors/AppError.js'

class Brand {
    async getAll(req, res, next) {
        try {
            // const brands = await BrandMapping.findAll()
            const brands = await BrandModel.getAll()
            res.json(brands)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id бренда')
            }
            // const brand = await BrandMapping.findByPk(req.params.id)
            const brand = await BrandModel.getOne(req.params.id)
            // if (!brand) {
            //     throw new Error('Бренд не найден в БД')
            // }
            res.json(brand)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            if (!req.body.name) {
                throw new Error('Нет названия бренда')
            }
            // const brand = await BrandMapping.create({name: req.body.name})
            const brand = await BrandModel.create(req.body)
            res.json(brand)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id бренда')
            }
            if (!req.body.name) {
                throw new Error('Нет названия бренда')
            }
            // const brand = await BrandMapping.findByPk(req.params.id)
            const brand = await BrandModel.update(req.params.id, req.body)
            // if (!brand) {
            //     throw new Error('Бренд не найден в БД')
            // }
            // const name = req.body.name ?? brand.name
            // await brand.update({name})
            res.json(brand)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id бренда')
            }
            // const brand = await BrandMapping.findByPk(req.params.id)
            const brand = await BrandModel.delete(req.params.id)
            // if (!brand) {
            //     throw new Error('Бренд не найден в БД')
            // }
            // await brand.destroy()
            res.json(brand)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }
}

export default new Brand()