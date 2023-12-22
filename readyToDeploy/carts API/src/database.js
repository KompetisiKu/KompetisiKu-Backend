const mysql = require('mysql2')
const dbConfig = require('./db.config')

const connection = mysql.createConnection({
  host: dbConfig.HOST || 'localhost',
  port: dbConfig.port || 3306,
  user: dbConfig.USER || 'root',
  password: dbConfig.PASSWORD || 'root',
  database: dbConfig.DB || 'kompetisiku'
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
