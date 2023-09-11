const Pool = require('pg').Pool
// import Pool from 'pg'
const pool = new Pool({
    database: 'my_database',
    user: 'my_user',
    password: 'Kjubntx12',
    port: 5432,
    host: 'localhost',
    // connectionTimeoutMillis: 2000,
    // connectionLimit: 2,
});

// const client = await pool.connect()


const getMerchants = () => {
    return new Promise(function(resolve, reject) {
        // pool.query('SELECT * FROM users', (error, results) => {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
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
        const { fio, position, int_phone, mobile, email, skype} = body

        pool.query('INSERT INTO users (fio, position, int_phone, mobile, email, skype) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [fio, position, int_phone, mobile, email, skype], (error, results) => {
            if (error) {
                reject (error)
            }
            // resolve(`A new merchant has been added : ${JSON.stringify(results.rows[0])}`)
        })
    })
}

const deleteMerchant = (merchantId) => {
    return new Promise(function (resolve, reject) {
        const id = parseInt(merchantId)

        pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
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
        const { id, fio, position, int_phone, mobile, email, skype } = body
        // pool.query('INSERT INTO merchants (name, email) VALUES ($2, $3) WHERE id = $1', [id, name, email], (error, results) => {
        // pool.query('UPDATE merchants (name, email) VALUES ($2, $3) WHERE id = $1', [id, name, email], (error, results) => {
        pool.query('UPDATE users SET fio = $2, position = $3, int_phone = $4, mobile = $5, email = $6, skype = $7 WHERE id = $1', [id, fio, position, int_phone, mobile, email, skype], (error, results) => {
        // pool.query('UPDATE users (fio, position, int_phone, mobile, email, skype) VALUES ($2, $3, $4, $5, $6, $7) WHERE id = $1', [id, fio, position, int_phone, mobile, email, skype], (error, results) => {
            if (error) {
                reject(error)
            }
            // resolve(`Merchant has been update: ${JSON.stringify(results.rows[0])}`)
            resolve(`Merchant updated with ID: ${id}, changed name to ${fio}.`)
        })
    })
}

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
    updateMerchant,
}