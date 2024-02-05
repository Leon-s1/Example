const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my_user',
    password: 'Kjubntx12',
    database: 'my_database',
    host: 'localhost',
    port: 5432,
    // connectionTimeoutMillis: 2000,
    // connectionLimit: 2,
});

// const client = await pool.connect()
const getUsers = () => {
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

const getUsersCity = (userCity) => {
    return new Promise(function(resolve, reject) {
        const city = userCity
        // pool.query('SELECT * FROM users', (error, results) => {
        // pool.query('SELECT * FROM users ORDER BY id ASC WHERE city = $1', [city], (error, results) => {
        pool.query('SELECT * FROM users WHERE city = $1 ORDER BY fio' , [city], (error, results) => {
        // const result = await pool.query('SELECT * FROM merchants ORDER BY id ASC' )
           if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const getByEmail = (userEmail) => {
    return new Promise(function(resolve, reject) {
        const email = userEmail
        pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}



const createUser = (body) => {
    return new Promise(function (resolve, reject) {
        const { fio, position, int_phone, mobile, email, skype, city } = body

        pool.query('INSERT INTO users (fio, position, int_phone, mobile, email, skype, city) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [fio, position, int_phone, mobile, email, skype, city], (error, results) => {
            if (error) {
                reject (error)
            }
            resolve(`A new merchant has been added : ${JSON.stringify(results.rows[0])}`)
        })
    })
}

const deleteUser = (body) => {
    return new Promise(function (resolve, reject) {
        // const id = parseInt(merchantId)
        const { id } = body

        pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`User delete with id: ${id}`)
        })
    })
}

const updateUser = (body) => {
    return new Promise(function (resolve, reject) {
        // const id = parseInt(merchantId)
        const { id, fio, position, int_phone, mobile, email, skype,  city} = body
        // pool.query('INSERT INTO merchants (name, email) VALUES ($2, $3) WHERE id = $1', [id, name, email], (error, results) => {
        // pool.query('UPDATE merchants (name, email) VALUES ($2, $3) WHERE id = $1', [id, name, email], (error, results) => {
        pool.query('UPDATE users SET fio = $2, position = $3, int_phone = $4, mobile = $5, email = $6, skype = $7, city = $8 WHERE id = $1', [id, fio, position, int_phone, mobile, email, skype, city], (error, results) => {
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
    getUsers,
    getUsersCity,
    getByEmail,
    createUser,
    deleteUser,
    updateUser,
}