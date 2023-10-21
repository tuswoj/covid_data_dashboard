<script>
  import Filters from "./Filters.svelte";
</script>

<div class="dashboard-container">
  <h1>Covid data dashboard: confirmed cases per country/region</h1>

  <Filters />
</div>

<style>
  .dashboard-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
