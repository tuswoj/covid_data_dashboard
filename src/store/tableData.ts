import { derived, type Readable } from "svelte/store";
import type { CovidData } from "../types";
import type { TableData } from "../types/table-data";
import { covidDataInDateRange } from ".";

export const tableData = derived<[Readable<CovidData>], TableData>(
  [covidDataInDateRange],
  ([$covidDataInDateRange]) => {
    const filteredCovidDataEntries = Object.entries($covidDataInDateRange).sort(
      ([dateString1], [dateString2]) => {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);

        return date1.getTime() - date2.getTime();
      }
    );

    if (filteredCovidDataEntries.length <= 0) {
      return [];
    }

    const [_firstDate, firstCountryCases] = filteredCovidDataEntries[0];
    const [_lastDate, lastCountryCases] =
      filteredCovidDataEntries[filteredCovidDataEntries.length - 1];

    if (!lastCountryCases && !firstCountryCases) {
      return [];
    }

    const tableData: TableData = Object.entries(lastCountryCases).map(
      ([countryName, cases]) => {
        const firstDateCases = firstCountryCases[countryName] ?? 0;

        return {
          countryName,
          cases: cases - firstDateCases,
        };
      }
    );

    const sortedData = tableData.sort(
      ({ cases: cases1 }, { cases: cases2 }) => cases2 - cases1
    );

    return sortedData.slice(0, 10);
  }
);
