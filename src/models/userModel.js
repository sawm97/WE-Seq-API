const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("Users", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.TEXT, // `nvarchar(max)` di Sequelize menggunakan TEXT
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(5),
    allowNull: false,
  },
}, {
  tableName: "Users", // Sesuaikan dengan nama tabel di database
  timestamps: false, // Nonaktifkan createdAt & updatedAt jika tidak ada di tabel
});

module.exports = User;
