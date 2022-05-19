import { DataTypes, Model } from 'sequelize';
import sequelize = require('sequelize');
import db from '.';
// import OtherModel from './OtherModel';

class Tasks extends Model {
  public taskId: number;
  public taskName: string;
  public status: string;
}

Tasks.init({
  taskId: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  taskName: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('NOW()')
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('NOW()')
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Tasks',
  timestamps: true,
});

export default Tasks;
