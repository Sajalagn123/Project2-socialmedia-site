const { User } = require('../models');

const userData = [{username: 'abc',password: 'abc'},{username: 'def',password: 'def'},{ username: 'ghi', password: 'ghi'},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
