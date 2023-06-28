const Pool = require('pg').Pool
// import Pool from 'pg'
const pool = new Pool({
    database: 'my_database',
    user: 'my_user',
    password: 'root',
    port: 5432,
    host: 'localhost',
    // connectionTimeoutMillis: 2000,
    // connectionLimit: 2,
});

// const client = await pool.connect()


const getMerchants = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
        // const result = await pool.query('SELECT * FROM merchants ORDER BY id ASC' )
           if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
        // console.log(result)
    })
}

const createMerchant = (body) => {
    return new Promise(function (resolve, reject) {
        const { name, email } = body

        pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
            if (error) {
                reject (error)
            }
            resolve(`A new merchant has been added added: ${JSON.stringify(results.rows[0])}`)
        })
    })
}

const deleteMerchant = (merchantId) => {
    return new Promise(function (resolve, reject) {
        const id = parseInt(merchantId)

        pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant delete with ID: ${id}`)
        })
    })
}

const updateMerchant = (body) => {
    return new Promise(function (resolve, reject) {
        // const id = parseInt(merchantId)
        const { index, name, email } = body
        // pool.query('INSERT INTO merchants (name, email) VALUES ($2, $3) WHERE id = $1', [id, name, email], (error, results) => {
        // pool.query('UPDATE merchants (name, email) VALUES ($2, $3) WHERE id = $1', [id, name, email], (error, results) => {
        pool.query('UPDATE merchants SET name = $2, email = $3 WHERE index = $1', [index, name, email], (error, results) => {
            if (error) {
                reject(error)
            }
            // resolve(`Merchant has been update: ${JSON.stringify(results.rows[0])}`)
            resolve(`Merchant updated with INDEX: ${index}, changed name to ${name}.`)
        })
    })
}

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
    updateMerchant,
}