export type entry = {
  id?: number;
  serieId?: string;
  serieText?: string;
  yearId?: string;
  countryId?: string;
  value?: number;
};

export async function getEntries(params: entry) {
  const { serieId, yearId, countryId } = params;
  if (!serieId && !yearId && !countryId) {
    return [];
  }

  const serieParam = serieId ? `&serieId=${serieId}` : "";
  const yearParam = yearId ? `&yearId=${yearId}` : "";
  const countryParam = countryId ? `&countryId=${countryId}` : "";

  const res = await fetch(
    `/api/entries?${serieParam}${yearParam}${countryParam}`
  );
  return await res.json();
}

export async function getAllEntries() {
  const res = await fetch(`/api/entries`);
  return await res.json();
}
