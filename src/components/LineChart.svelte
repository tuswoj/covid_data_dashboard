<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Chart, {
    Chart as ChartInstance,
    type ChartConfiguration,
  } from "chart.js/auto";
  import { lineChartData } from "../store";
  import type { LineChartData } from "../types";
  import { getLineChartConfig } from "../utils";

  let canvas: HTMLCanvasElement;
  let chartInstance: ChartInstance | null = null;

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

<canvas bind:this={canvas} />
