import { DataTypes } from "sequelize";
import sequelize from "@/dbConfig/dbConfig";

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Username already exists",
      },
      validate: {
        notEmpty: {
          msg: "Please provide a User Name",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email already exists",
      },
      validate: {
        isEmail: {
          msg: "Please provide a valid Email",
        },
        notEmpty: {
          msg: "Please provide an Email",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please provide a Password",
        },
      },
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    forgotPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    forgotPasswordTokenExpiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    verifyToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verifyTokenExpiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "users",
  }
);

export default User;
