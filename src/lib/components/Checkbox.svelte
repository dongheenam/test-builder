<script>
  import Checkbox from "carbon-icons-svelte/lib/Checkbox.svelte";
  import CheckboxChecked from "carbon-icons-svelte/lib/CheckboxCheckedFilled.svelte";
  import CheckboxIndeterminate from "carbon-icons-svelte/lib/CheckboxIndeterminate.svelte";

  export let checked = false;
  export let indeterminate = false;
  export let disabled = false;

  /** @type {null | (() => void) } */
  export let onChange = null;

  /** @type {import("carbon-icons-svelte").CarbonIconProps["size"]} */
  export let size = 24;
</script>

<label>
  <input
    type="checkbox"
    bind:checked
    bind:indeterminate
    on:change={onChange}
    {disabled}
    {...$$restProps}
  />
  <span class="icon-checkbox">
    {#if !checked && !indeterminate}
      <!-- empty checkbox -->
      <Checkbox {size} />
    {:else if checked}
      <!-- checked -->
      <CheckboxChecked {size} />
    {:else}
      <!-- indeterminate -->
      <CheckboxIndeterminate {size} />
    {/if}
  </span>
  <slot />
</label>

<style lang="postcss">
  label {
    position: relative;
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .icon-checkbox {
    color: var(--gray11);
    border-radius: var(--radius-item);

    input:checked ~ &,
    input:indeterminate ~ & {
      color: var(--primary9);
    }

    input:hover ~ & {
      color: var(--primary10);
      background-color: var(--gray4);
    }

    input:focus ~ & {
      outline: 3px solid var(--primary8);
    }

    input:disabled ~ & {
      color: var(--gray8);
    }
  }
</style>
