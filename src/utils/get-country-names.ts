import { CovidDataHeaders, type CountryName, type ParsedData } from "../types";

export function getCountryNames(parsedData: ParsedData[]): CountryName[] {
  const countryNamesFromParsedData = parsedData.map(
    (data) => data[CovidDataHeaders.CountryOrRegion]
  );

  const countryNamesSet = new Set(countryNamesFromParsedData);

  return Array.from(countryNamesSet);
}
