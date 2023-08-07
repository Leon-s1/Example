const express = require('express');
// import express from 'express'
// import cors from 'cors'
const cors = require('cors');
// const body_parser = require('body-parser')
const app = express();
const port = 3001
// app.get('/', (req, res) => {
//     res.status(200).send('Hello Worlds!')
// })
// import {getMerchants, createMerchant, deleteMerchant, updateMerchant} from './merchant_model.js'
const merchant_model = require('./merchant_model.js')
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
    merchant_model.getMerchants()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/merchants', (req, res) => {
    merchant_model.createMerchant(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.delete('/merchants/:id', (req, res) => {
    merchant_model.deleteMerchant(req.params.id)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.put('/merchants/:id', (req, res) => {
    // merchant_model.updateMerchant(req.params.id, req.body)
    merchant_model.updateMerchant(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.listen(port, () => {
    console.log(`App.Express running on port ${port}.`)
})


