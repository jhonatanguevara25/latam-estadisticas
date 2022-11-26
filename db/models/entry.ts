import { DataTypes } from "sequelize";
import { db } from "../db";

export const Entry = db.define(
  "Entry",
  {
    serieId: {
      type: DataTypes.STRING,
    },
    serieText: {
      type: DataTypes.STRING,
    },
    countryId: {
      type: DataTypes.STRING,
    },
    yearId: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

console.log(Entry === db.models.Entry); // true
