<script lang="ts">
  import { tableData } from "../store";

  tableData.subscribe((x) => console.log(x));
</script>
