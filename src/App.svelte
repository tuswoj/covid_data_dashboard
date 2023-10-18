<script lang="ts">
  import { onMount } from "svelte";
  import Loader from "./components/Loader.svelte";
  import Dashboard from "./components/Dashboard.svelte";
  import ErrorMessage from "./components/ErrorMessage.svelte";
  import { getData } from "./utils/get-data";
  import { covidData } from "./store/covidData";

  let loading = false;
  let error = false;

  onMount(async () => {
    loading = true;
    const [data, errorOccurred] = await getData();
    loading = false;
    error = errorOccurred;

    if (!errorOccurred && data !== null) {
      covidData.set(data);
    }
  });

  covidData.subscribe((val) => {
    console.log("data from store", val);
  });
</script>

<div class="app">
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
    /* width: 100vw; */
    /* height: 100vh; */
    display: flex;
    padding: 2rem;
    /* justify-content: center; */
    /* align-items: center; */
  }
</style>
