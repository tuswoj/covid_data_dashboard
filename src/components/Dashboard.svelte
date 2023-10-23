<script>
  import Filters from "./Filters.svelte";
  import LineChart from "./LineChart.svelte";
</script>

<div class="dashboard-container">
  <h1>Covid data dashboard: confirmed cases per country/region</h1>

  <Filters />
  <LineChart />
</div>

<style>
  .dashboard-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
</style>
