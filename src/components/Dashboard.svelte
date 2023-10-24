<script>
  import Filters from "./Filters.svelte";
  import LineChart from "./LineChart.svelte";
  import Table from "./Table/Table.svelte";
</script>

<div class="dashboard-container">
  <h1>Covid data dashboard</h1>

  <Filters />
  <LineChart />
  <Table />
</div>

<style>
  .dashboard-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
</style>
