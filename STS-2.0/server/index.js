// import config from 'dotenv/config';
// require('dotenv').config()
const express = require('express');
const cors = require('cors');
// const body_parser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3001
// app.get('/', (req, res) => {
//     res.status(200).send('Hello Worlds!')
// })
// import {getMerchants, createMerchant, deleteMerchant, updateMerchant} from './merchant_model.js'
const user_model = require('./user_model.js')
// import MerchantModel from './merchant_model.js'

// app.use(cors())
app.use(express.json())
app.use(cors({origin: 'http://localhost:3000', credentials: true}))
// app.use(function (req, res, next) {
//     res.setHeader = function (accessControlAllowOrigin, httpLocalhost3000) {
//
//     }
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();
// });
app.get('/', (req, res) => {
    user_model.getUsers()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

// app.get('/users/:fio', (req, res) => {
//
//     user_model.requestSearch(req.params.fio)
//         .then(response => {
//             res.status(200).send(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

app.get('/users/:city', (req, res) => {

    user_model.getUsersCity(req.params.city)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get('/users/:email', (req, res) => {
    user_model.getByEmail(req.params.email)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error);
        })
})


app.post('/users', (req, res) => {
    user_model.createUser(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.delete('/users/:id', (req, res) => {
    user_model.deleteUser(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.put('/users/:id', (req, res) => {
    // merchant_model.updateMerchant(req.params.id, req.body)
    user_model.updateUser(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.listen(PORT, () => {
    console.log(`App.Express running on port ${PORT}.`)
})

