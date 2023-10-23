<script lang="ts">
  import { covidData, startDate, endDate } from "../store";
  import { extractDateRange } from "../utils";
  import CountrySelect from "./CountrySelect.svelte";
  import DateInput from "./DateInput.svelte";

  const [min, max] = extractDateRange($covidData);
</script>

<div class="filters-container">
  <DateInput label={"From:"} date={startDate} {min} {max} />
  <DateInput label={"To:"} date={endDate} {min} {max} />
  <CountrySelect />
</div>

<style>
  .filters-container {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 2rem;
  }
</style>
