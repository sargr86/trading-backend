require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        username: process.env.DEVELOPMENT_DB_USER,
        password: process.env.DEVELOPMENT_DB_PASS,
        database: process.env.DEVELOPMENT_DB,
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: 0,
        // dialectOptions: {
        //     useUTC: false, // for reading from database
        // },
        logging: false
    },
    "staging": {
        "username": process.env.STAGING_DB_USER,
        "password": process.env.STAGING_DB_PASS,
        "database": process.env.STAGING_DB,
        "host": process.env.STAGING_IP,
        "dialect": "mysql",
        "operatorsAliases": 0,
        "logging": true
    },
    "production": {
        "username": process.env.PRODUCTION_DB_USER,
        "password": process.env.PRODUCTION_DB_PASS,
        "database": process.env.PRODUCTION_DB,
        "host": process.env.PRODUCTION_IP,
        "dialect": "mysql",
        "operatorsAliases": 0,
        "logging": true
    }
};
