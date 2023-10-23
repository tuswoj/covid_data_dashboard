<script>
  import Filters from "./Filters.svelte";
  import LineChart from "./LineChart.svelte";
  import Table from "./Table.svelte";
</script>

<div class="dashboard-container">
  <h1>Covid data dashboard: confirmed cases per country/region</h1>

  <Filters />
  <LineChart />
  <Table />
</div>

<style>
  .dashboard-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
</style>
