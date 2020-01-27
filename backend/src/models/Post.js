const db = require('../config/database');

const Post = db.sequelize.define('posts', {
    id_user:{
        type: db.Sequelize.INTEGER,
        allowNull: false
    }, 
    message: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

// Post.sync();
module.exports = Post;