import { derived, type Readable } from "svelte/store";
import type { CovidData } from "../types";
import type { TableData } from "../types/table-data";
import { covidDataInDateRange } from ".";

export const tableData = derived<[Readable<CovidData>], TableData>(
  [covidDataInDateRange],
  ([$filteredCovidData]) => {
    const filteredCovidDataEntries = Object.entries($filteredCovidData);

    if (filteredCovidDataEntries.length <= 0) {
      return [];
    }

    const [_lastDate, lastCountryCases] =
      filteredCovidDataEntries[filteredCovidDataEntries.length - 1];

    if (!lastCountryCases) {
      return [];
    }
    const tableData: TableData = Object.entries(lastCountryCases).map(
      ([countryName, cases]) => {
        return {
          countryName,
          cases,
        };
      }
    );

    const sortedData = tableData.sort(
      ({ cases: cases1 }, { cases: cases2 }) => cases2 - cases1
    );

    return sortedData.slice(0, 10);
  }
);
