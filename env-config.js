


const prod = process.env.NODE_ENV === 'production'

const { parsed } = require('dotenv').config(
  {
//  path: prod ? '.env.production' : '.env'
  path : '.env'
  }
);


module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://api.example.com' : 'https://localhost:8080',
  'process.env.EKHM' : JSON.stringify(parsed)
}
