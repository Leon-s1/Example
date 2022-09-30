import AppError from "../errors/AppError.js";

class Product {

    async getAll(req, res, next) {
        if (true) {
            return next(AppError.badRequest('Этот запрос не удалось обработать'))
        }
        res.status(200).send('Список всех товаров')
    }

    // async getAll(req, res) {
    //     res.status(200).send('Список всех товаров')
    // }
    //


    async getOne(req, res) {
        res.status(200).send('Получение одного товара')
    }
    async create(req, res) {
        res.status(200).send('Создание нового товара')
    }
    async update(req, res) {
        res.status(200).send('Обновление товара')
    }
    async delete(req, res) {
        res.status(200).send('Удаление товара')
    }
}

export default new Product()

