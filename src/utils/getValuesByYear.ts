export type valueByYear = {
  yearId: string;
  totalValue: number;
};

export async function getValuesByYear(serieId: string): Promise<valueByYear[]> {
  const res = await fetch(`/api/years?serieId=${serieId}`);
  return await res.json();
}
