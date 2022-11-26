import type { RequestHandler } from "@sveltejs/kit/types";
import { Entry } from "../../../db/models/entry";

export const get: RequestHandler = async ({ url }) => {
  // http://localhost:3000/api/entries?serieId=SP.RUR.TOTL.ZG&yearId=YR2020&countryId=ARG
  const serieId = url.searchParams.get("serieId");
  const yearId = url.searchParams.get("yearId");
  const countryId = url.searchParams.get("countryId");
  if (!serieId && !yearId && !countryId) {
    let allSeries = await Entry.findAll({
      raw: true,
      attributes: ["serieText", "serieId"],
    });

    // remove duplicates from allSeries
    const uniqueSeries = allSeries.reduce((acc, serie) => {
      if (
        !acc.some(
          (obj) =>
            obj.serieId === serie.serieId && obj.serieText === serie.serieText
        )
      ) {
        acc.push(serie);
      }
      return acc;
    }, []);

    return {
      body: uniqueSeries,
    };
    // return {
    //   status: 400,
    //   body: {
    //     error: "Missing serieId, yearId and countryId",
    //     sampleUrl:
    //       "/api/entries?serieId=SP.RUR.TOTL.ZG&yearId=YR2020&countryId=ARG",
    //   },
    // };
  }

  let entries: {
    serieId?: string;
    yearId?: string;
    countryId?: string;
  } = {};

  if (serieId) {
    entries["serieId"] = serieId;
  }

  if (yearId) {
    entries["yearId"] = yearId;
  }

  if (countryId) {
    entries["countryId"] = countryId;
  }

  const entriesResponse = await Entry.findAll({
    raw: true,
    where: entries,
  });

  return {
    body: entriesResponse,
  };
};
