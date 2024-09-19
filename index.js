const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here
// One-to-one
User.hasOne(Profile)
Profile.belongsTo(User)

// One-to-many
User.hasMany(Post)
Post.belongsTo(User)

// One-to-many
Post.hasMany(Comment)
Comment.belongsTo(Post)

// Many-to-many
User.hasMany(Like, {through: 'user-like'})
Like.hasMany(User, {through: 'user-like'})

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}