const {prisma} = require("../prisma/prisma-client");
const bcrypt = require('bcryptjs')
const jdenticon = require("jdenticon/standalone");
const path = require('path')
const fs = require("fs");

const UserController = {
    register: async (req, res) => {
        // res.send('register')
        const {email, password, name} = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({error: 'Все поля обязательны'})
        }
        // res.send('Все поля заполнены')
        try {
            const existingUser = await prisma.user.findUnique(({where: {email}}))
            if (existingUser) {
                return res.status(400).json({error: 'Пользователь уже существует'})
            }
            const hashedPassword = await bcrypt.hash(password, 10)

            const png = jdenticon.toPng(name, 200)
            const avatarName = `${name}_${Date.now()}.png`
            const avatarPath = path.join(__dirname, '../uploads', avatarName)

            fs.writeFileSync(avatarPath, png)

            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                    avatarUrl: `/uploads/${avatarPath}`
                }
            })
            res.json(user)

        } catch (e) {
            console.log('Error in register', e)
            res.status(500).json({e: 'Internal server error'})
        }
    },
    login: async (req, res) => {
        res.send('Login')
    },
    current: async (req, res) => {
        res.send('current')
    },
    getUserById: async (req, res) => {
        res.send('getUserById')
    },
    updateUser: async (req, res) => {
        res.send('updateUser')
    },
}

module.exports = UserController;