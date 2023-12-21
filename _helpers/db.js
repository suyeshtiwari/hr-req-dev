const config = require('../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    console.log(host, port, user, password);
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { host: host, dialect: 'mysql' });

    // init models and add them to the exported db object
    db.Account = require('../models/account.model')(sequelize);
    db.RefreshToken = require('../models/refresh-token.model')(sequelize);
    db.Role = require('../models/role.model')(sequelize);

    // define relationships
    db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
    db.RefreshToken.belongsTo(db.Account);

    db.Account.belongsToMany(db.Role, { through: 'account_role'});
    db.Role.belongsToMany(db.Account, { through: 'account_role' });

    // sync all models with database
    await sequelize.sync();
}