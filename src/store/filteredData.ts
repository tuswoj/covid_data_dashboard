import { derived, type Writable } from "svelte/store";
import { covidData } from "./covidData";
import { startDate } from "./startDate";
import { endDate } from "./endDate";
import { selectedCountry } from "./selectedCountry";
import type { CountryCases, CovidData } from "../types";

type FilterType = "start" | "end";

function filterCovidDataByDate(
  covidData: CovidData,
  filterDateStr: string,
  filterType: FilterType
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

function filterCovidDataByCountryName(
  covidData: CovidData,
  selectedCountry: string
): CovidData {
  if (!selectedCountry.length) {
    return covidData;
  }

  const covidDataEntries = Object.entries(covidData);

  return covidDataEntries.reduce<CovidData>(
    (filteredCovidData, [date, casesData]) => {
      const casesDataEntries = Object.entries(casesData);

      const filteredCasesData = casesDataEntries.reduce<CountryCases>(
        (acc, [countryName, cases]) => {
          if (selectedCountry === countryName) {
            acc[countryName] = cases;
          }

          return acc;
        },
        {}
      );

      filteredCovidData[date] = filteredCasesData;

      return filteredCovidData;
    },
    {}
  );
}

export const filteredCovidData = derived<
  [Writable<CovidData>, Writable<string>, Writable<string>, Writable<string>],
  CovidData
>(
  [covidData, startDate, endDate, selectedCountry],
  ([$covidData, $startDate, $endDate, $selectedCountry]) => {
    const filteredByStartDate = (covidData: CovidData) =>
      filterCovidDataByDate(covidData, $startDate, "start");

    const filteredByEndDate = (covidData: CovidData) =>
      filterCovidDataByDate(covidData, $endDate, "end");

    const filteredByCountryName = (covidData: CovidData) =>
      filterCovidDataByCountryName(covidData, $selectedCountry);

    return [
      filteredByStartDate,
      filteredByEndDate,
      filteredByCountryName,
    ].reduce(
      (filteredCovidData, currentFilterFunction) =>
        currentFilterFunction(filteredCovidData),
      $covidData
    );
  }
);
