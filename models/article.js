
import { DataType } from 'sequelize';
import Sequelize from '../config/database';

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
export default Article;
