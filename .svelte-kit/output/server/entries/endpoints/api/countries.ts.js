import { E as Entry, d as db } from "../../../chunks/entry-407d69f9.js";
import "sequelize";
const get = async ({ url }) => {
  const serieId = url.searchParams.get("serieId");
  const totalValue = await Entry.findAll({
    raw: true,
    attributes: ["countryId", [db.fn("sum", db.col("value")), "totalValue"]],
    group: ["countryId"],
    where: {
      serieId
    }
  });
  return {
    body: totalValue
  };
};
export { get };
