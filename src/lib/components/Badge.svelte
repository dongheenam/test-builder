<script>
  export let rounded = false;
  export let color = "gray";

  export let uppercase = false;

  $: vars = {
    rad: rounded ? "1.25em" : null,
    text: color === "gray" ? null : `var(--${color}11)`,
    bg: color === "gray" ? null : `var(--${color}3)`,
  };
</script>

<span
  style:text-transform={uppercase ? "uppercase" : null}
  style:--badge-rad={vars.rad}
  style:--badge-color={vars.text}
  style:--badge-bg={vars.bg}
  {...$$restProps}
>
  <slot />
</span>

<style>
  span {
    font-size: var(--size-xs);
    padding: 0.25em 0.5em;
    border-radius: var(--badge-rad, 0px);
    font-weight: 600;
    color: var(--badge-color, var(--gray11));
    background-color: var(--badge-bg, var(--gray3));
  }
</style>
