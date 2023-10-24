<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Chart, {
    Chart as ChartInstance,
    type ChartConfiguration,
  } from "chart.js/auto";
  import { endDate, lineChartData, selectedCountry, startDate } from "../store";
  import type { CountryName, LineChartData } from "../types";
  import { getLineChartConfig } from "../utils";

  let canvas: HTMLCanvasElement;
  let chartInstance: ChartInstance | null = null;

  const getLineChartHeaderText = (
    selectedCountry: CountryName,
    startDate: string,
    endDate: string
  ): string => {
    let text = "Cases reported";

    if (selectedCountry) {
      text += ` in ${selectedCountry}`;
    }

    if (startDate) {
      text += ` from ${startDate}`;
    }

    if (endDate) {
      text += ` to ${endDate}`;
    }

    return text;
  };

  const createOrUpdateChart = (chartData: LineChartData) => {
    const chartConfig: ChartConfiguration = getLineChartConfig(chartData);

    if (!canvas) {
      return;
    }

    if (!chartInstance) {
      chartInstance = new Chart(
        canvas?.getContext("2d") as CanvasRenderingContext2D,
        chartConfig
      );

      // TODO: resizing
      // window.addEventListener("beforeprint", () => {
      //   chartInstance?.resize();
      // });
    } else if (!!chartInstance) {
      chartInstance.data = chartConfig.data;
      chartInstance.update();
    }
  };

  $: createOrUpdateChart($lineChartData);

  onMount(() => {
    createOrUpdateChart($lineChartData);
  });

  onDestroy(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  });
</script>

<section class="line-chart-section">
  <h3>
    {getLineChartHeaderText($selectedCountry, $startDate, $endDate)}
  </h3>
  <div class="line-chart-container">
    <canvas bind:this={canvas} />
  </div>
</section>

<style>
  .line-chart-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .line-chart-container {
    position: relative;
    width: 80vw;
    height: 40vw;
  }
</style>
