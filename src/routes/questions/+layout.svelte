<script>
  import { page } from "$app/stores";
  import Bucket from "./Bucket.svelte";

  const routes = [
    { href: "/questions", label: "Browse questions", disabled: false },
    { href: "/questions", label: "My questions", disabled: true },
  ];
</script>

<div class="root">
  <aside>
    <nav class="nav">
      <div class="text--gray nav-title">navigate</div>
      <ul class="nav-menu">
        {#each routes as { href, label, disabled }}
          <li>
            <a
              class="text--gray text-ia bg-ia nav-item"
              {href}
              data-active={$page.url.pathname === href}
              data-disabled={disabled}>{label}</a
            >
          </li>
        {/each}
      </ul>
      <div class="text--gray nav-title">bucket</div>
      <Bucket />
    </nav>
  </aside>
  <main>
    <slot />
  </main>
</div>

<style lang="postcss">
  .root {
    width: min(90vw, 1050px);

    display: grid;
    grid-template-columns: 250px minmax(500px, 1fr);
    column-gap: 1rem;

    background-color: var(--gray2);
  }

  main {
    box-shadow: 0 0 0 100vmax var(--gray2);
    clip-path: inset(0 -100vmax 0 0);

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  aside {
    background-color: var(--bg);
    border-right: 1px solid var(--gray6);
  }
  .nav {
    position: sticky;
    top: 6rem;
  }

  .nav-title {
    padding: 12px 0;
    font-weight: 500;
    font-variant: small-caps;
  }

  .nav-menu {
    margin-top: 0;
    margin-bottom: 1.25rem;

    display: flex;
    flex-direction: column;
  }
  .nav-item {
    display: block;
    line-height: 1;
    padding: 12px 16px;

    border-left: 1px solid var(--gray8);
  }
</style>
