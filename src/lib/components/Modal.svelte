<script>
  import portal from "$lib/utils/portal";
  export let open = false;
</script>

{#key open}
  <div use:portal={"#app"} class="root">
    {#if open}
      <div class="overlay">
        <div class="content">
          <slot />
        </div>
      </div>
    {/if}
  </div>
{/key}

<style>
  .overlay {
    background: rgba(0 0 0 / 0.5);
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    overflow-y: auto;
  }

  .content {
    background: var(--bg);
    width: min(90vw, 1000px);
    margin: 3rem 0;
    border-radius: var(--radius-card);
  }
</style>
