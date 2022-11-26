import { Sequelize, DataTypes } from "sequelize";
const dbname = "yarashop";
const username = "admin123";
const password = "YGTl63QI";
const db = new Sequelize(dbname, username, password, {
  host: "yarashop.database.windows.net",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    idle: 1e4
  },
  dialectOptions: {
    encrypt: true
  }
});
try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const Entry = db.define("Entry", {
  serieId: {
    type: DataTypes.STRING
  },
  serieText: {
    type: DataTypes.STRING
  },
  countryId: {
    type: DataTypes.STRING
  },
  yearId: {
    type: DataTypes.STRING
  },
  value: {
    type: DataTypes.DOUBLE
  }
}, {
  timestamps: false
});
console.log(Entry === db.models.Entry);
export { Entry as E, db as d };
