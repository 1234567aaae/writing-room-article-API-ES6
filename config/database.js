const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('writing_room_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
