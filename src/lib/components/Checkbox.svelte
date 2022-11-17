<script>
  import Icon from "./Icon.svelte";

  export let checked = false;
  export let indeterminate = true;
  export let disabled = false;
</script>

<label>
  <input type="checkbox" bind:checked bind:indeterminate {disabled} />
  <span class="icon-checkbox">
    {#if !checked && !indeterminate}
      <!-- empty checkbox -->
      <Icon icon="fluent:checkbox-unchecked-24-regular" />
    {:else if checked}
      <!-- checked -->
      <Icon icon="fluent:checkbox-checked-24-filled" />
    {:else}
      <!-- indeterminate -->
      <Icon icon="fluent:checkbox-indeterminate-24-regular" />
    {/if}
  </span>
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
    width: 1.25em;
    height: 1.25em;
    opacity: 0;
  }

  .icon-checkbox {
    font-size: 1.25em;
    /* prevent layout shift when the icon changes */
    width: 1em;
    height: 1em;

    display: flex;
    place-items: center;

    input:checked ~ &,
    input:indeterminate ~ & {
      color: var(--primary9);
    }

    input:hover ~ & {
      color: var(--primary10);
    }

    input:focus ~ & {
      outline: 3px solid var(--primary8);
      border-radius: 3px;
    }

    input:disabled ~ & {
      color: var(--gray8);
    }
  }
</style>
