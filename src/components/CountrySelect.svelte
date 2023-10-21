<script lang="ts">
  import Select from "svelte-select";
  import { covidData } from "../store/covidData";
  import { selectedCountries } from "../store/selectedCountries";
  import { butterWhite, grey, lightGrey } from "../constants";

  const countries = Object.keys($covidData);

  const onSelect = (event: CustomEvent): void => {
    const selectedValues = (event.detail ?? []).map(
      (selected: { value: string }) => selected.value
    );

    selectedCountries.set(selectedValues);
  };
</script>

<Select
  items={countries}
  multiple
  closeListOnChange={false}
  on:input={onSelect}
  --background={grey}
  --multi-item-bg={grey}
  --list-background={grey}
  --item-hover-bg={lightGrey}
  --multi-item-clear-icon-color={butterWhite}
  --clear-icon-color={butterWhite}
/>
