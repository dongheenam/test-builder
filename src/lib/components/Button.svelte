<script>
  /** @type {"gray" | "primary" | "green" | "yellow" | "red"} */
  export let color = "gray";

  /** @type {"default" | "outline" | "subtle" | "filled" }*/
  export let variant = "default";

  /** @type {{[key: string]: string | null}} */
  $: palette = {
    text: null,
    textHover: null,
    bd: null,
    bg: null,
    bgHover: null,
    bgActive: null,
  };
  // variants
  $: {
    switch (variant) {
      case "outline":
        palette.bd = `currentColor`;
        break;
      case "subtle":
        palette.bg = `var(--${color}3)`;
        break;
      case "filled":
        palette = {
          ...palette,
          text: `var(--bg)`,
          textHover: `var(--bg)`,
          bg: `var(--${color}9)`,
          bgHover: `var(--${color}10)`,
          bgActive: `var(--${color}11)`,
        };
        break;
    }
  }
</script>

<button
  style:--btn-color={palette.text}
  style:--btn--hover-color={palette.textHover}
  style:--btn-bd={palette.bd}
  style:--btn-bg={palette.bg}
  style:--btn--hover-bg={palette.bgHover}
  style:--btn--active-bg={palette.bgActive}
  {...$$restProps}
>
  <slot />
</button>

<style>
  button {
    padding: 0.6em 1em;
    font-weight: 600;

    display: flex;
    gap: 0.6em;
    align-items: center;

    color: var(--btn-color, var(--gray11));
    background-color: var(--btn-bg, var(--bg));
    border: 1px solid var(--btn-bd, transparent);
    border-radius: var(--radius-item);
  }
  button :global(iconify-icons) {
    font-size: 1.5em;
  }
  button:hover {
    color: var(--btn--hover-color, var(--gray12));
    background-color: var(--btn--hover-bg, var(--gray4));
  }
  button:active {
    background-color: var(--btn--active-bg, var(--gray5));
  }
</style>
