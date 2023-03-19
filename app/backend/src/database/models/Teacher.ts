import { DataTypes, Model } from 'sequelize';
import db from '.';

class Teacher extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare email: string;
  declare name: string;
  declare phone: string;
  declare birthday: Date;
}

Teacher.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: 'teachers',
  },
);

export default Teacher;
