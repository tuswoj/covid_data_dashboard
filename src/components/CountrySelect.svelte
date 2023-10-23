<script lang="ts">
  import Select from "svelte-select";
  import { selectedCountry, countryNames } from "../store";
  import { butterWhite, grey, lightGrey } from "../constants";

  const onSelect = (event: CustomEvent): void => {
    let value = "";
    const eventDetail = event.detail;

    if (eventDetail) {
      value = eventDetail.value;
    }

    selectedCountry.set(value);
  };
</script>

<div class="select-container">
  <label for="country-select">Country:</label>
  <Select
    id="country-select"
    placeholder="Select country"
    on:input={onSelect}
    items={$countryNames}
    --background={grey}
    --clear-icon-color={butterWhite}
    --font-size="1rem"
    --item-hover-bg={lightGrey}
    --list-background={grey}
    --height="40px"
    --width="200px"
    --border="1px solid var(--butter-white)"
    --border-radius="4px"
  />
</div>

<style>
  .select-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
