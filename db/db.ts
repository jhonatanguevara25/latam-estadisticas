import { Sequelize } from "sequelize";

const dbname = "yarashop";
const username = "admin123";
const password = "YGTl63QI";

export const db = new Sequelize(dbname, username, password, {
  host: "yarashop.database.windows.net",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  dialectOptions: {
    encrypt: true,
  },
});

try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
