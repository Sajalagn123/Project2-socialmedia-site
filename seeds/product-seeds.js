const { Product } = require('../models');

const productData = [{ product_name: 'T-Shirt', price: 14.99, description: 'Sample Description', image: 'https://cdn.pixabay.com/photo/2015/12/14/21/59/t-shirt-template-1093333__340.png', user_id: 1, },
{ product_name: 'Denim Jeans', price: 29.99, description: 'Dark blue denim jeans. Specifications: size: M, color: dark blue', image: '/images/jeans.jpg', user_id: 1, },
{ product_name: 'Artesian Coffee Mug', price: 9.99, description: 'A artesian coffee mug delightfully designed with a white flowers and a red background.', image: '/images/artesianmug.jpg', user_id: 1, },
{ product_name: 'Computer Speaker', price: 25.99, description: 'A computer speaker that is designed to be used in a classroom, work environment or for home use as part of an entertainment system.', image: '/images/ComputerSpeaker.jpg', user_id: 1, },
{ product_name: 'Smart speaker with Bluetooth and Blazxia', price: 35.99, description: 'A smart speaker with Bluetooth and Blazxia integration. Blazxia is a top of the line AI capable of performing differnet actions to make the life easier to enjoy.', image: '/images/SmartSpeaker.jpg', user_id: 1, },
{ product_name: 'Savernake Cutlery Set', price: 19.99, description: 'A top of the line knife set made of high quality stainless steel.', image: '/images/savernake-knives.jpg', user_id: 1, },
{ product_name: 'Vintage Couch', price: 99.99, description: 'A vintage c' }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
