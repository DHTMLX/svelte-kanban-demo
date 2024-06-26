<script>
  import { onMount, onDestroy } from "svelte";
  import { Kanban, Toolbar, defaultEditorShape } from "@dhx/trial-kanban";
  import "@dhx/trial-kanban/dist/kanban.css";
  
  export let columns;
  export let cards;
  export let rows;
  export let cardShape;

  let toolbar_container, kanban_container;
  let kanban, toolbar;

  onMount(() => {
    kanban = new Kanban(kanban_container, {
      columns, 
      cards,
      rows,
      rowKey: "type",
      cardShape,
      editorShape: [
        ...defaultEditorShape, // import default config for editorShape
        {
          type: "links",
          key: "links",
          label: "Links"
        },
        {
          type: "comments",
          key: "comments",
          label: "Comments",
          config: {
            placement: "editor"
          }
        }
      ],
      currentUser: 1,
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
