<script>
  import "iconify-icon";

  export let icon = "fluent:border-none-24-regular";

  /** @type {boolean | null} */
  export let inline = null;

  /** @type {string | number | null} */
  export let height = null;

  $: fontSize = typeof height === "number" ? `${height}px` : height;
</script>

<iconify-icon {inline} {icon} style:font-size={height} {...$$restProps} />
