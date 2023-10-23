import type { CovidData, DateFilterType } from "../types";

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
  const covidDataEntries = Object.entries(covidData);

  return covidDataEntries.reduce<CovidData>(
    (filteredCovidData, [date, casesData]) => {
      const currentDate = new Date(date);

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
