<script>
  import { isObject } from "$lib/utils";

  /** @type {string | undefined} */
  export let label;

  /** @type {string | undefined} */
  export let name = label?.toLowerCase();

  /** @type {any | undefined} */
  export let selected = undefined;

  /** @type {(typeof selected)[] | {value: (typeof selected); label: string}[]}*/
  export let options = [];

  $: items = isObject(options[0])
    ? options
    : options.map((option) => ({ value: option, label: option.toString() }));
</script>

<label>
  <span class="label">{label}</span>
  <select {name} bind:value={selected} on:change={() => console.log(selected)}>
    {#each items as { value, label: name }}
      <option {value}>{name}</option>
    {/each}
  </select>
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
  }

  select {
    width: 100%;
    height: 2em;
    padding-left: 8px;
    border-radius: var(--radius-item);

    cursor: pointer;
  }
</style>
