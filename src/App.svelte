<script lang="ts">
  import { onMount } from "svelte";
  import Loader from "./components/Loader.svelte";
  import Dashboard from "./components/Dashboard.svelte";
  import ErrorMessage from "./components/ErrorMessage.svelte";
  import { getData } from "./utils/get-data";
  import { cssVariables } from "./constants";
  import { covidData, countryNames, startDate, endDate } from "./store";
  import { convertDateFormat, extractDateRange } from "./utils";

  let loading = false;
  let error = false;

  onMount(async () => {
    loading = true;

    const { data, errorOccurred, countryNames: countries } = await getData();
    loading = false;
    error = errorOccurred;

    if (!errorOccurred && data !== null) {
      // Init store values
      covidData.set(data);
      countryNames.set(countries);

      // Get max and min date, and set those as default date range
      const [minDate, maxDate] = extractDateRange(data);
      startDate.set(convertDateFormat(minDate));
      endDate.set(convertDateFormat(maxDate));
    }
  });
</script>

<div class="app" style={cssVariables}>
  {#if loading && !error}
    <Loader />
  {:else if error}
    <ErrorMessage />
  {:else}
    <Dashboard />
  {/if}
</div>

<style>
  .app {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding: 2rem;
    background-color: var(--dark-blue);
    color: var(--butter-white);
  }
</style>
