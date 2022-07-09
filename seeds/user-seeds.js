const { User } = require('../models');

const userData = [{ email: 'abc', password: 'abc' }, { email: 'def', password: 'def' }, { email: 'ghi', password: 'ghi' },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
