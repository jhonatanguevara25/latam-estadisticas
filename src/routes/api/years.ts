import type { RequestHandler } from "@sveltejs/kit/types";
import { Entry } from "../../../db/models/entry";
import { db } from "../../../db/db";

export const get: RequestHandler = async ({ url }) => {
  // http://localhost:3000/api/years?serieId=SP.RUR.TOTL.ZG
  const serieId = url.searchParams.get("serieId");

  // select yearId, SUM(value) from [dbo].[Values] where SerieId = 'SH.MED.BEDS.ZS' GROUP BY yearId
  const totalValue = await Entry.findAll({
    raw: true,
    attributes: ["yearId", [db.fn("sum", db.col("value")), "totalValue"]],
    group: ["yearId"],
    where: {
      serieId,
    },
  });

  return {
    body: totalValue,
  };
};
