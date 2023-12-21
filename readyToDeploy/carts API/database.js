const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '0.0.0.0',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'kompetisiku'
})

const db = {
  connect: () => connection.connect(),
  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (error, results, fields) => {
        if (error) reject(error)
        resolve({ results, fields })
      })
    }),
  end: () => connection.end()
}

module.exports = db
