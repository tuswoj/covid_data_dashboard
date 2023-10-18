import {
  CovidDataHeaders,
  type ConfirmedCases,
  type CovidData,
  type ParsedData,
} from "../types";

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
  return parsedData.reduce(
    (accumulatedData: CovidData, current: ParsedData): CovidData => {
      // Retrieve name of country/region
      const countryOrRegion = current[CountryOrRegion];

      if (!countryOrRegion) {
        return accumulatedData;
      }

      if (!accumulatedData[countryOrRegion]) {
        accumulatedData[countryOrRegion] = new Map();
      }

      const countryOrRegionData = accumulatedData[countryOrRegion];

      const currentParsedDataEntries = Object.entries(current);

      for (let i = 0; i < currentParsedDataEntries.length; i++) {
        const [key, value] = currentParsedDataEntries[i];

        // We don't want to do anything with those known header values
        if (covidDataHeaders.includes(key)) {
          continue;
        }

        // Create date from
        const reportDate = new Date(key);

        const currentSavedCases = countryOrRegionData.get(reportDate);

        if (!currentSavedCases) {
          countryOrRegionData.set(reportDate, value);
          continue;
        }

        countryOrRegionData.set(reportDate, currentSavedCases + value);
      }

      return accumulatedData;
    },
    {}
  );
}
