import type { CovidData } from "../types";

/**
 * Sort entries from earliest to latest, and then return dates of first and last entry
 * @param covidData
 * @returns Min and max date found in provided covid data
 */
export function extractDateRange(
  covidData: CovidData
): [min: string, max: string] {
  const dateStrings = Object.keys(covidData);

  const sortedCovidDateStrings = dateStrings.sort(
    (dateString1, dateString2) => {
      const date1 = new Date(dateString1);
      const date2 = new Date(dateString2);

      return date1.getTime() - date2.getTime();
    }
  );

  const minDate = sortedCovidDateStrings[0] ?? "";
  const maxDate =
    sortedCovidDateStrings[sortedCovidDateStrings.length - 1] ?? "";

  return [minDate, maxDate];
}
