import { Pool } from "pg";

const fs = require("fs");

const pool = new Pool({
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "1122",
  database: "onemall",
});

export default pool;
