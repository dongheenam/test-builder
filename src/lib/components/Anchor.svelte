<script>
  export let href = "#";
  export let blank = false;
</script>

<a {href} target={blank ? "_blank" : null} rel={blank ? "noopener" : null}>
  <slot />
</a>

<style>
  a:hover {
    text-decoration: underline;
    color: var(--primary11);
  }
</style>
