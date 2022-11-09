<script>
  /** @type {string[]}*/
  export let buckets = [];
</script>

<div class:empty={!buckets.length}>bucket is empty...</div>

<style>
  .empty {
    color: var(--gray10);
    font-style: italic;
  }
</style>
