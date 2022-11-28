<script>
  import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte";

  import { isObject } from "$lib/utils";

  /** @type {string | undefined} */
  export let label = undefined;

  /** @type {string | undefined} */
  export let name = label?.toLowerCase();

  /** @type {any | undefined} */
  export let selected = undefined;

  /** @type {(typeof selected)[] | {value: (typeof selected); label: string}[]}*/
  export let options = [];

  /** @type {null | (() => void) } */
  export let onChange = null;

  $: items = isObject(options[0])
    ? options
    : options.map((option) => ({ value: option, label: option.toString() }));
</script>

<label>
  {#if label}
    <span class="label">{label}</span>
  {/if}
  <div class="container">
    <ChevronDown size={16} />
    <select {name} bind:value={selected} on:change={onChange}>
      {#each items as { value, label: name }}
        <option {value}>{name}</option>
      {/each}
    </select>
  </div>
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
  }

  .container {
    position: relative;
  }
  .container :global(svg) {
    position: absolute;
    top: 50%;
    right: 0.25rem;
    translate: 0 -50%;

    pointer-events: none;
  }

  select {
    width: 100%;
    height: 2em;
    padding-left: 8px;
    padding-right: 1.5rem;
    border-radius: var(--radius-item);

    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
  }
</style>
