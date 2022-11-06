<script>
  import "$lib/styles/globals.css";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<!-- COMPONENTS -->
<div id="app">
  <Header />

  <!-- content -->
  <div class="page">
    <slot />
  </div>

  <Footer />
</div>

<!-- STYLE -->
<style>
  #app {
    min-height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  .page {
    flex-grow: 1;
    padding: 0 0.5rem;
    margin: auto;

    display: flex;
  }
</style>
