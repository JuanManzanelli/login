const envConfig = require('../config');
module.exports = {
  mariaDb: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'desafio7_db',
    },
  },
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: './db/sql/ecommerce.sqlite',
    },
    useNullAsDefault: true,
  },
  mongodb: {
   // uri: `mongodb+srv://Juanmanza:${envConfig.DB_PASSWORD}@coderxx.fm0gxl1.mongodb.net/?retryWrites=true&w=majority`,
  },
};