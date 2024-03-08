<script>
    import "@dhx/trial-kanban/dist/kanban.css";
    import { onMount } from "svelte";
    import { Kanban } from "@dhx/trial-kanban";
    
    export let columns;
    export let cards;

    let container;
    onMount(() => {
        new Kanban(container, {
            columns, cards
        })
    });
</script>

<div bind:this={container} style="width: 100%; height: 100%;">

</div>

