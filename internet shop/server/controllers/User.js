// class User {
//     async signup(req, res) {
//         res.status(200).send('Регистрация пользователя')
//     }
//
//     async login(req, res) {
//         res.status(200).send('Вход в личный кабинет')
//     }
//
//     async check(req, res) {
//         res.status(200).send('Проверка авторизации')
//     }
//
//     async getAll(req, res) {
//         res.status(200).send('Список всех пользователей')
//     }
//
//     async getOne(req, res) {
//         res.status(200).send('Получение одного пользователя')
//     }
//
//     async create(req, res) {
//         res.status(200).send('Создание нового пользователя')
//     }
//
//     async update(req, res) {
//         res.status(200).send('Обновление пользователя')
//     }
//
//     async delete(req, res) {
//         res.status(200).send('Удаление пользователя')
//     }
// }
//
// export default new User()
//************************************************************
//Реализуем методы контроллера User
import { User as UserMapping } from '../models/mapping.js'
import AppError from '../errors/AppError.js'

class User {
    async signup(req, res, next) {
        res.status(200).send('Регистрация пользователя')
    }

    async login(req, res, next) {
        res.status(200).send('Вход в личный кабинет')
    }

    async check(req, res, next) {
        res.status(200).send('Проверка авторизации')
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            const user = await UserMapping.findByPk(req.params.id)
            if (!user) {
                throw new Error('Пользователь не найден в БД')
            }
            const name = req.body.name ?? user.name
            const password = req.body.password ?? user.password
            await user.update({name, password})
            res.json(user)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            const user = await UserMapping.findByPk(req.params.id)
            if (!user) {
                throw new Error('Пользователь не найден в БД')
            }
            await user.destroy()
            res.json(user)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }
}

export default new User()