<script lang="ts">
  export let label: string;
  export let date;
</script>

<div class="date-input-container">
  <label for="startDate">{label}</label>
  <input id="startDate" type="date" bind:value={$date} />
</div>

<style>
  .date-input-container {
    display: flex;
    max-width: 200px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
