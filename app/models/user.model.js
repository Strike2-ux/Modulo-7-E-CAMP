import { DataTypes } from 'sequelize';
import sequelize from '../database/db.config.js';

const User = sequelize.define(
  'users',
  {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'El formato del email no es válido (Ej: paul@gmail.cl)',
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
  },
  {
    timestamps: true,
    tableName: 'users',
  }
);

export default User;
