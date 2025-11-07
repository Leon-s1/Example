const Pool = require("pg").Pool;
const pool = new Pool({
  //***********Подключение к БД postgresql в контейнер Docker
  host: "sts-db",
  user: "postgres",
  password: "Vbkfhtgf131715",
  database: "STS",
  port: 5432,
});

const getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const getUsersCity = (userCity) => {
  return new Promise(function (resolve, reject) {
    const city = userCity;
    pool.query(
      "SELECT * FROM users WHERE city = $1 ORDER BY fio",
      [city],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      },
    );
  });
};

const getByEmail = (userEmail) => {
  return new Promise(function (resolve, reject) {
    const email = userEmail;
    pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      },
    );
  });
};

const createUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { fio, position, int_phone, mobile, email, skype, city } = body;
    pool.query(
      "INSERT INTO users (fio, position, int_phone, mobile, email, skype, city) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [fio, position, int_phone, mobile, email, skype, city],
      (error, results) => {
        if (error) {
          reject(error);
        }
      },
    );
  });
};

const deleteUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { id } = body;
    pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        reject(error);
      }
    });
  });
};

const updateUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, fio, position, int_phone, mobile, email, skype, city } = body;
    pool.query(
      "UPDATE users SET fio = $2, position = $3, int_phone = $4, mobile = $5, email = $6, skype = $7, city = $8 WHERE id = $1",
      [id, fio, position, int_phone, mobile, email, skype, city],
      (error, results) => {
        if (error) {
          reject(error);
        }
      },
    );
  });
};

module.exports = {
  getUsers,
  getUsersCity,
  getByEmail,
  createUser,
  deleteUser,
  updateUser,
};
