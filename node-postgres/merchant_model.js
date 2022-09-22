const Pool = require('pg').Pool
const pool = new Pool({
    connectionLimit: 2,
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Kjubntx12',
    port: 5432,
})


const getMerchants = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
            if (error) {
                reject (error)
            }
            resolve(results.rows)
        })
    })
}

const createMerchant = (body) => {
    return new Promise(function (resolve, reject) {
        const {name, email} = body
        pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
            if (error) {
                reject (error)
            }
            resolve (`Merchant deleted with ID: ${id}`)
        })
    })
}

const deleteMerchant = () => {
    return Promise(function (resolve, reject) {
        const id = parseInt(request.params.id)
        pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant delete with ID: ${id}`)
        })
    })
}

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
}