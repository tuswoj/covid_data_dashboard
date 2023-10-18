import { fetchCovidCSVData, parseRawData, transformParsedData } from ".";
import { DATA_CACHE_KEY } from "../constants";
import type { CovidData } from "../types";

export async function getData(): Promise<
  [data: CovidData | null, errorOccurred: boolean]
> {
  let rawData: string;

  const cachedQueryResult = localStorage.getItem(DATA_CACHE_KEY);

  if (cachedQueryResult) {
    rawData = cachedQueryResult;
  } else {
    const [fetchedRawData, errorOccurred] = await fetchCovidCSVData();

    if (errorOccurred && fetchedRawData === null) {
      return [null, true];
    } else {
      rawData = fetchedRawData as string;
      localStorage.setItem(DATA_CACHE_KEY, rawData);
    }
  }

  const parsedData = parseRawData(rawData);
  const covidData = transformParsedData(parsedData);

  return [covidData, false];
}
