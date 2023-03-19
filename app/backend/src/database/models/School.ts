import { DataTypes, Model } from 'sequelize';
import db from '.';

class School extends Model {
  declare id: number;
  declare name: string;
}

School.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    tableName: 'Schools',
  },
);

export default School;
