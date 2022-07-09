const { Product } = require('../models');

const productData = [{ id: 1, product_name: 'T-Shirt', price: 14.99, description: 'Sample Description', image: 'https://cdn.pixabay.com/photo/2015/12/14/21/59/t-shirt-template-1093333__340.png', user_id: 1, },
{ id: 2, product_name: 'Denim Jeans', price: 29.99, description: 'Dark blue denim jeans. Specifications: size: M, color: dark blue', image: '/images/jeans.jpg', user_id: 1, },
{ id: 3, product_name: 'Artesian Coffee Mug', price: 9.99, description: 'A artesian coffee mug delightfully designed with a white flowers and a red background.', image: '/images/artesianmug.jpg', user_id: 1, },
{ id: 4, product_name: 'Computer Speaker', price: 25.99, description: 'A computer speaker that is designed to be used in a classroom, work environment or for home use as part of an entertainment system.', image: '/images/ComputerSpeaker.jpg', user_id: 1, },
{ id: 5, product_name: 'Smart speaker with Bluetooth and Blazxia', price: 35.99, description: 'A smart speaker with Bluetooth and Blazxia integration. Blazxia is a top of the line AI capable of performing differnet actions to make the life easier to enjoy.', image: '/images/SmartSpeaker.jpg', user_id: 1, },
{ id: 6, product_name: 'Savernake Cutlery Set', price: 19.99, description: 'A top of the line knife set made of high quality stainless steel.', image: '/images/savernake-knives.jpg', user_id: 1, },
{ id: 7, product_name: 'Vintage Couch', price: 99.99, description: 'A vintage couch with with soft and comfortable pillows and a hip green color.', image: '/images/sofa.jpg', user_id: 1, },
{ id: 8, product_name: 'Vintage Chair', price: 19.99, description: ' A modern chair to solve your modern sitting problems.', image: '/images/modernchair.jpg', user_id: 1, },
{ id: 9, product_name: 'Modern Table', price: 49.99, description: 'A modern table to solve your modern dining problems.', image: '/images/moderntable.jpg', user_id: 1, },
{ id: 10, product_name: 'Coffee Table', price: 16.99, description: ' A chic coffee table to style up your living room.', image: '/images/coffeetable.jpg', user_id: 1, },
{ id: 11, product_name: 'Stylish Shoes', price: 65.99, description: 'A pair of stylish shoes to make you look fetch.', image: '/images/shoes.jpg', user_id: 1, },
{ id: 12, product_name: 'Stylish Hat', price: 25.99, description: 'A stylish hat to make you look very fetch.', image: '/images/hat.jpg', user_id: 1, },
{ id: 13, product_name: 'Beanie', price: 15.99, description: 'A beanie to make you look fetch. What, fetch is still in! Comes in a variety of colors to fit with any outfit', image: '/images/beanie.jpg', user_id: 1, },
{ id: 14, product_name: 'Bicycle', price: 199.99, description: 'A classic method of transportation', image: '/images/bicycle.jpg', user_id: 1, },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
