import { derived, type Writable } from "svelte/store";
import type { CovidData } from "../types";
import { filterCovidDataByDate } from "../utils/filter-data-by-date";
import { covidData } from "./covidData";
import { endDate } from "./endDate";
import { startDate } from "./startDate";

export const covidDataInDateRange = derived<
  [Writable<CovidData>, Writable<string>, Writable<string>],
  CovidData
>([covidData, startDate, endDate], ([$covidData, $startDate, $endDate]) => {
  const filteredByStartDate = (covidData: CovidData) =>
    filterCovidDataByDate(covidData, $startDate, "start");

  const filteredByEndDate = (covidData: CovidData) =>
    filterCovidDataByDate(covidData, $endDate, "end");

  return [filteredByStartDate, filteredByEndDate].reduce(
    (filteredCovidData, currentFilterFunction) =>
      currentFilterFunction(filteredCovidData),
    $covidData
  );
});
