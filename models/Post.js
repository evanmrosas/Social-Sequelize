const {db, DataTypes, Model} = require('../db/connection')

class Post extends Model{}

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    userId: DataTypes.INTEGER
}, {
    sequelize: db,
    modelName: 'Post'
})

module.exports = Post;