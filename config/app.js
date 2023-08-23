require('dotenv').config()
const dbHost = process.env.DBHOST || 'mongodb://localhost:27017/Urban-Job'

module.exports = {
  name: 'Urban-Job',
  title: 'Urban-Job',
  http: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 80
  },
  author: 'und3fined-v01d',
  version: '1.0.0',
  db: {
    connectionUri: dbHost,
    params: {},
    collections: ['moment', 'user', 'feeling', 'ask']
  }
}
