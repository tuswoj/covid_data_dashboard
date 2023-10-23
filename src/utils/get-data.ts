import { fetchCovidCSVData, parseRawData, transformParsedData } from ".";
import { DATA_CACHE_KEY } from "../constants";
import type { CountryName, CovidData } from "../types";
import { getCountryNames } from "./get-country-names";

export async function getData(): Promise<{
  data: CovidData | null;
  countryNames: CountryName[];
  errorOccurred: boolean;
}> {
  let rawData: string;

  const cachedQueryResult = localStorage.getItem(DATA_CACHE_KEY);

  if (cachedQueryResult) {
    rawData = cachedQueryResult;
  } else {
    const [fetchedRawData, errorOccurred] = await fetchCovidCSVData();

    if (errorOccurred && fetchedRawData === null) {
      return { errorOccurred: true, countryNames: [], data: null };
    } else {
      rawData = fetchedRawData as string;
      localStorage.setItem(DATA_CACHE_KEY, rawData);
    }
  }

  const parsedData = parseRawData(rawData);
  const countryNames = getCountryNames(parsedData);
  const covidData = transformParsedData(parsedData);

  return { errorOccurred: false, countryNames, data: covidData };
}
