const { Product } = require('../models');

const productData = [
    {
        product_name: 'T-Shirt',
        price: 14.99,
        description:'Sample Description',
        image:'https://cdn.pixabay.com/photo/2015/12/14/21/59/t-shirt-template-1093333__340.png',
        user_id:1
    },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
