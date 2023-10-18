<script lang="ts">
  import { endDate } from "../store/endDate";
  import { filtersStore } from "../store/filtersStore";
  import { startDate } from "../store/startDate";
  import type { SetDateFn } from "../types/filters-store";
  import DateInput from "./DateInput.svelte";

  const onDateChange =
    (setDateFn: SetDateFn) =>
    (event: Event): void => {
      const inputElement = event.target as HTMLInputElement;
      const selectedDate: string = inputElement.value;

      setDateFn(selectedDate);
    };
</script>

<div class="filters-container">
  <h2>Filter data</h2>

  <DateInput label={"From:"} date={startDate} />
  <DateInput label={"From:"} date={endDate} />
</div>

<style>
  .filters-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
