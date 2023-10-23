import { derived, type Readable, type Writable } from "svelte/store";
import { selectedCountry } from "./selectedCountry";
import type { CovidData } from "../types";
import { covidDataInDateRange } from "./covidDataInDateRange";
import { filterCovidDataByCountryName } from "../utils";

export const filteredCovidData = derived<
  [Readable<CovidData>, Writable<string>],
  CovidData
>(
  [covidDataInDateRange, selectedCountry],
  ([$covidDataInDateRange, $selectedCountry]) => {
    return filterCovidDataByCountryName(
      $covidDataInDateRange,
      $selectedCountry
    );
  }
);
