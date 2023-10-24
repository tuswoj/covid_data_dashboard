<script lang="ts">
  import { covidData, startDate, endDate } from "../store";
  import { extractDateRange } from "../utils";
  import CountrySelect from "./CountrySelect.svelte";
  import DateInput from "./DateInput.svelte";

  const [min, max] = extractDateRange($covidData);
</script>

<section class="filters-section">
  <h3>Filter data:</h3>
  <div class="filters">
    <DateInput label={"From:"} date={startDate} {min} {max} />
    <DateInput label={"To:"} date={endDate} {min} {max} />
    <CountrySelect />
  </div>
</section>

<style>
  .filters-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 2rem;
  }
</style>
