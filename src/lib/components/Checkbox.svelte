<script>
  import Icon from "./Icon.svelte";

  export let checked = false;
  export let indeterminate = false;
  export let disabled = false;

  /** @type {null | (() => void) } */
  export let onChange = null;

  /** @type {"nm" | "sm" | "xs"} */
  export let size = "nm";

  const heightChart = { nm: 24, sm: 20, xs: 16 };
  $: height = heightChart[size];

  $: iconProps = {
    height: height,
  };
</script>

<label style:--height={`${height}px`}>
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
      <Icon
        icon={`fluent:checkbox-unchecked-${height}-regular`}
        {...iconProps}
      />
    {:else if checked}
      <!-- checked -->
      <Icon icon={`fluent:checkbox-checked-${height}-filled`} />
    {:else}
      <!-- indeterminate -->
      <Icon
        icon={`fluent:checkbox-indeterminate-${height}-regular`}
        {...iconProps}
      />
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
    width: var(--height);
    height: var(--height);
    opacity: 0;
  }

  .icon-checkbox {
    font-size: var(--height);
    /* prevent layout shift when the icon changes */
    width: 1em;
    height: 1em;
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
