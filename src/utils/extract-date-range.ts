import type { CovidData } from "../types";

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

  const minDate = sortedCovidDateStrings[0];
  const maxDate = sortedCovidDateStrings[sortedCovidDateStrings.length - 1];

  return [minDate, maxDate];
}
