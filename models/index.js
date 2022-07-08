
=======
// import models
const User = require('./User');
const Product = require('./Product');

// Products belongsTo User
Product.belongsTo(User, { foreignKey: 'user_id' });
// Users have many Products
User.hasMany(Product);

module.exports = {
  User,
  Product
};
