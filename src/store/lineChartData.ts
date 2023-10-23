import type { LineChartData } from "../types";
import type { CovidData } from "../types";

import { derived, type Readable } from "svelte/store";
import { filteredCovidData } from "./filteredData";

export const lineChartData = derived<[Readable<CovidData>], LineChartData>(
  [filteredCovidData],
  ([$filteredData]) => {
    return Object.entries($filteredData)
      .sort(([dateString1], [dateString2]) => {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);

        return date1.getTime() - date2.getTime();
      })
      .reduce<LineChartData>(
        (lineChartData, [date, countryCases]) => {
          const cases = Object.values(countryCases).reduce(
            (sum, current) => sum + current,
            0
          );

          lineChartData.values.push(cases);
          lineChartData.labels.push(date);

          return lineChartData;
        },
        { values: [], labels: [] }
      );
  }
);
