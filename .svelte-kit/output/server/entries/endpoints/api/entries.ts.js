import { E as Entry } from "../../../chunks/entry-407d69f9.js";
import "sequelize";
const get = async ({ url }) => {
  const serieId = url.searchParams.get("serieId");
  const yearId = url.searchParams.get("yearId");
  const countryId = url.searchParams.get("countryId");
  if (!serieId && !yearId && !countryId) {
    let allSeries = await Entry.findAll({
      raw: true,
      attributes: ["serieText", "serieId"]
    });
    const uniqueSeries = allSeries.reduce((acc, serie) => {
      if (!acc.some((obj) => obj.serieId === serie.serieId && obj.serieText === serie.serieText)) {
        acc.push(serie);
      }
      return acc;
    }, []);
    return {
      body: uniqueSeries
    };
  }
  let entries = {};
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
    where: entries
  });
  return {
    body: entriesResponse
  };
};
export { get };
