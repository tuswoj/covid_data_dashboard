import { nonCountryDataEntires } from "../constants";
import { CovidDataHeaders, type CovidData, type ParsedData } from "../types";

const { ProvinceOrState, CountryOrRegion, Lat, Long } = CovidDataHeaders;

const covidDataHeaders: string[] = [
  ProvinceOrState,
  CountryOrRegion,
  Lat,
  Long,
];

/**
 * Transform parsed data and return object that satisfies CovidData interface.
 *
 * @param parsedData Array of objects containing key-value pairs from CSV report
 * @returns Object containing records of confirmed cases for all countries
 * included in report on all dates included in report (from Jan 22 2020 to Mar 09 2023).
 */
export function transformParsedData(parsedData: ParsedData[]): CovidData {
  const covidData = parsedData.reduce<CovidData>((accumulatedData, current) => {
    const countryOrRegion = current[CountryOrRegion];

    if (
      countryOrRegion === undefined ||
      nonCountryDataEntires.includes(countryOrRegion)
    ) {
      return accumulatedData;
    }

    const currentParsedDataEntries = Object.entries(current);

    for (let i = 0; i < currentParsedDataEntries.length; i++) {
      const [key, value] = currentParsedDataEntries[i];
      // We don't want to do anything with those known header values
      if (covidDataHeaders.includes(key)) {
        continue;
      }

      // If there is no entry in accumulated data for given date, create new one
      if (!accumulatedData[key]) {
        accumulatedData[key] = {};
      }

      const casesOnCurrentDate = accumulatedData[key][countryOrRegion] ?? 0;

      accumulatedData[key][countryOrRegion] = casesOnCurrentDate + value;
    }

    return accumulatedData;
  }, {});

  return covidData;
}
