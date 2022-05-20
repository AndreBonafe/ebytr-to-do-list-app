import {  Model } from 'sequelize';
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
    type: sequelize.STRING,
    autoIncrement: true,
    primaryKey: true,
  },
  taskName: {
    type: sequelize.STRING,
  },
  status: {
    type: sequelize.STRING,
  },
  createdAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.literal('NOW()')
  },
  updatedAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.literal('NOW()')
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Tasks',
  timestamps: true,
});

export default Tasks;
