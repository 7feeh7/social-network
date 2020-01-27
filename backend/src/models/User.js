const db = require('../config/database');

const User = db.sequelize.define('users', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: db.Sequelize.STRING(63),
        allowNull: false 
    }, 
    email: {
        type: db.Sequelize.STRING(50),
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }, 
    password: {
        type: db.Sequelize.STRING(60),
        allowNull: false
    },

}, {
    timestamps: true,
});

// User.sync();
module.exports = User;