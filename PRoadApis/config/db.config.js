module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'Emergestion',
    dialect: 'mysql',
    logging: 'false',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}