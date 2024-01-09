const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ToDo = sequelize.define(
  "Todos",
  {
    Task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ToDo;
