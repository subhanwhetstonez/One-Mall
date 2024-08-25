import { DataTypes } from "sequelize";
import sequelize from "@/lib/dbConfig";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamps: true,
});

User.sync();
export default User;
