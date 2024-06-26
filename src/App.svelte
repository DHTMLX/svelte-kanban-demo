<script>
  import Kanban from "./Kanban.svelte";
  import { getData } from "./data.js";
  
  const { cards, columns, rows, cardShape } = getData();
</script>

<Kanban {cards} {columns} {rows} {cardShape} />
