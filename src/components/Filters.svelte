<script lang="ts">
  import { endDate } from "../store/endDate";
  import { selectedCountries } from "../store/selectedCountries";
  import { startDate } from "../store/startDate";
  import CountrySelect from "./CountrySelect.svelte";
  import DateInput from "./DateInput.svelte";
</script>

<div class="filters-container">
  <h2>Filter data</h2>

  <DateInput label={"From:"} date={startDate} />
  <DateInput label={"From:"} date={endDate} />
  <CountrySelect />
</div>

<style>
  .filters-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
