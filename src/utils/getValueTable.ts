export type valueTable = {
  countryId: string;
  yearId: string;
  totalValue: number;
};

export async function getValueTable(serieId: string): Promise<valueTable[]> {
  const res = await fetch(`/api/infoTabla?serieId=${serieId}`);
  const data = await res.json();
  return data;
}
