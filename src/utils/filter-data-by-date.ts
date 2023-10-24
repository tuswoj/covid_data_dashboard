import type { CovidData, DateFilterType } from "../types";

/**
 * Filter covidData by date of record
 * @param covidData
 * @param filterDateStr date string in format d/m/yy
 * @param filterType start | end
 * @returns
 */
export function filterCovidDataByDate(
  covidData: CovidData,
  filterDateStr: string,
  filterType: DateFilterType
): CovidData {
  if (!filterDateStr) {
    return covidData;
  }

  const filterByStart = filterType === "start";
  const filterByEnd = filterType === "end";

  const filterDate = new Date(filterDateStr);
  filterDate.setHours(0, 0, 0, 0);

  const covidDataEntries = Object.entries(covidData);

  return covidDataEntries.reduce<CovidData>(
    (filteredCovidData, [date, casesData]) => {
      const currentDate = new Date(date);
      currentDate.setHours(0, 0, 0, 0);

      if (filterByStart && currentDate.getTime() >= filterDate.getTime()) {
        filteredCovidData[date] = casesData;
      } else if (filterByEnd && currentDate.getTime() <= filterDate.getTime()) {
        filteredCovidData[date] = casesData;
      }

      return filteredCovidData;
    },
    {}
  );
}
