const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001

const user_model = require('./user_model.js')
app.use(express.json())
app.use(cors({origin: 'http://localhost:3000', credentials: true}))

app.get('/', (req, res) => {
    user_model.getUsers()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

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


