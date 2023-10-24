<script lang="ts">
  import TableCell from "./TableCell.svelte";

  export let countryName: string;
  export let cases: number;
  export let index: number;
</script>

<TableCell>{index}</TableCell>
<TableCell>{countryName}</TableCell>
<TableCell>{cases}</TableCell>
