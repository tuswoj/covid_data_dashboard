import { nonCountryDataEntires } from "../constants";
import { CovidDataHeaders, type CountryName, type ParsedData } from "../types";

export function getCountryNames(parsedData: ParsedData[]): CountryName[] {
  const countryNamesFromParsedData = parsedData
    .map((data) => data[CovidDataHeaders.CountryOrRegion])
    .filter(
      (countryName) =>
        !!countryName && !nonCountryDataEntires.includes(countryName)
    );

  const countryNamesSet = new Set(countryNamesFromParsedData);

  return Array.from(countryNamesSet);
}
