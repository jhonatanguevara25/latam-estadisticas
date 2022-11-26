import { E as Entry, d as db } from "../../../chunks/entry-407d69f9.js";
import "sequelize";
const get = async ({ url }) => {
  const serieId = url.searchParams.get("serieId");
  const totalValues = await Entry.findAll({
    raw: true,
    attributes: [
      "yearId",
      "countryId",
      [db.fn("sum", db.col("value")), "totalValue"]
    ],
    group: ["yearId", "countryId"],
    where: {
      serieId
    }
  });
  return {
    body: totalValues
  };
};
export { get };
