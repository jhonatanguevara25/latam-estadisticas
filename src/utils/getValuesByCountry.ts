export type valueByCountry = {
  countryId: string;
  totalValue: number;
};

export async function getValuesByCountry(
  serieId: string
): Promise<valueByCountry[]> {
  const res = await fetch(`/api/countries?serieId=${serieId}`);
  return await res.json();
}
