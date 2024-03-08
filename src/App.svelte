<script>
  import Kanban from "./Kanban.svelte";
  import { getData } from "./data.js";
  
  const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} />
