<script lang="ts">
  import type { Writable } from "svelte/store";
  import { convertDateFormat } from "../utils";

  export let label: string;
  export let date: Writable<string>;
  export let min: string;
  export let max: string;
</script>

<div class="date-input-container">
  <label for="date">{label}</label>
  <input
    id={`date-${label}`}
    type="date"
    bind:value={$date}
    min={convertDateFormat(min)}
    max={convertDateFormat(max)}
  />
</div>

<style>
  .date-input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    max-width: 200px;
  }
  .date-input-container input[type="date"] {
    box-sizing: border-box;
    background-color: var(--grey);
    border-radius: 4px;
    border: 1px solid var(--butter-white);
    cursor: pointer;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    height: 40px;
    padding: 0 6px;
    width: 200px;
  }

  .date-input-container label {
    font-size: 1rem;
  }
</style>
