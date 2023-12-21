const { DataTypes } = require("sequelize");

function model (sequelize) {
    const attributes = {
        roleName: {type: DataTypes.STRING, allowNull: false},
        roleDesc: {type: DataTypes.STRING, allowNull: true}
    }
    return sequelize.define('role', attributes);
}

module.exports = model;