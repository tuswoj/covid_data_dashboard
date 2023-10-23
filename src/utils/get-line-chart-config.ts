import type { ChartConfiguration } from "chart.js";
import type { LineChartData } from "../types";
import { butterWhite } from "../constants";

export function getLineChartConfig({
  values,
  labels,
}: LineChartData): ChartConfiguration<"line"> {
  return {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          data: values,
          borderColor: butterWhite,
          pointRadius: 0.5,
          tension: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };
}
