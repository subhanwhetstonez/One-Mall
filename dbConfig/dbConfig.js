import { Sequelize } from "sequelize";
import postgres from "postgres";
import pg from "pg";

const DATABASE_URL = "postgres://postgres:1122@localhost:5432/onemall";

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectModule: pg,
});

export default sequelize;
