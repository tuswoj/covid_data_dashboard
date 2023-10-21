import { derived, type Writable } from "svelte/store";
import { covidData } from "./covidData";
import { startDate } from "./startDate";
import { endDate } from "./endDate";
import { selectedCountries } from "./selectedCountries";
import type { CovidData } from "../types";

function filterCovidDataByStartDate(
  covidData: CovidData,
  startDateStr: string
): CovidData {
  if (!startDateStr) {
    return covidData;
  }

  const startDate = new Date(startDateStr);
  const covidDataEntries = Object.entries(covidData);

  covidDataEntries.reduce<CovidData>(
    (filteredCovidData, [countryName, countryCases]) => {
      for (const [date, cases] of countryCases.entries()) {
        if (startDate.getTime() > date.getTime()) {
          console.log(startDate > date);
          countryCases.delete(date);
        }
      }

      filteredCovidData[countryName] = countryCases;

      return filteredCovidData;
    },
    {}
  );

  console.log("end of filtering");
  return {};
}

export const filteredCovidData = derived<
  [Writable<CovidData>, Writable<string>, Writable<string>, Writable<string[]>],
  CovidData
>(
  [covidData, startDate, endDate, selectedCountries],
  ([$covidData, $startDate]) => {
    return filterCovidDataByStartDate($covidData, $startDate);
  }
);
