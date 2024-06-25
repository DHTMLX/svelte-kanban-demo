<script>
    import { onMount, onDestroy } from "svelte";
    import { Kanban, Toolbar } from "@dhx/trial-kanban";
    import "@dhx/trial-kanban/dist/kanban.css";
    
    export let columns;
    export let cards;

    let toolbar_container, kanban_container;
    let kanban, toolbar;

    onMount(() => {
        kanban = new Kanban(kanban_container, {
            columns, 
            cards,
            // other configuration properties
        })

        toolbar = new Toolbar(toolbar_container, {
            api: kanban.api,
            // other configuration properties
        })
    });

    onDestroy(() => {
        kanban.destructor();
        toolbar.destructor();
    });
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
