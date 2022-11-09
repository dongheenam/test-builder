<script>
  import Search from "./Search.svelte";
  import List from "./List.svelte";
</script>

<svelte:head>
  <title>Questions - Maths Test Builder</title>
</svelte:head>

<main>
  <h2>Search Questions</h2>
  <Search />
  <List />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
