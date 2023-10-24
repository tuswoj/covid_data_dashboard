<script lang="ts">
  import { endDate, startDate, tableData } from "../../store";
  import TableCell from "./TableCell.svelte";
  import TableRow from "./TableRow.svelte";

  const headers = ["", "Country", "Cases"];

  const getTableHeaderText = (startDate: string, endDate: string): string => {
    return `TOP 10 countries: cases reported between ${startDate} and ${endDate}`;
  };
</script>

<section class="table-section">
  <h3>{getTableHeaderText($startDate, $endDate)}</h3>
  <div class="table">
    {#each headers as header (header)}
      <TableCell><strong>{header}</strong></TableCell>
    {/each}
    {#each $tableData as tableDataElement, index (`row-${index}`)}
      <TableRow
        index={index + 1}
        countryName={tableDataElement.countryName}
        cases={tableDataElement.cases}
      />
    {/each}
  </div>
</section>

<style>
  .table-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .table {
    border: 1px solid var(--grey);
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    background-color: var(--grey);
    gap: 1px;
  }
</style>
