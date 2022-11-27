<script>
  import Icon from "./Icon.svelte";

  /** @type {string | undefined} */
  export let icon = undefined;

  /** @type {number | string} */
  export let size = 24;

  /** @type {null | (() => void) } */
  export let onClick = null;

  $: height = typeof size === "number" ? `${size}px` : size;
</script>

<button style:font-size={height} on:click={onClick}>
  <Icon {icon} />
</button>

<style>
  button {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 1px;
    border-radius: var(--radius-item);

    color: var(--gray11);
  }
  button:hover {
    color: var(--gray12);
    background-color: var(--gray4);
  }
  button:active {
    background-color: var(--gray5);
  }

  button:disabled {
    color: var(--gray10);
  }
</style>
