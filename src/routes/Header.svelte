<script>
  import { page } from "$app/stores";

  const routes = [
    { href: "/", label: "Home" },
    { href: "/questions", label: "Questions" },
    { href: "/tests", label: "Tests" },
  ];
</script>

<header>
  <div class="title">
    <span class="title-logo">MathTestBuilder</span>
    <span class="title-version">v0.2.beta</span>
  </div>
  <div class="menu">
    <div class="menu-user">
      <a href="/auth/login">Log in</a>
    </div>
    <nav>
      <ul class="nav-list">
        {#each routes as { href, label }}
          <li>
            <a class="nav-item" {href} data-active={$page.url.pathname === href}
              >{label}</a
            >
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style lang="postcss">
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    padding: 0 1.5rem;

    background-color: var(--white);
    box-shadow: var(--shadow-xs);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  /* left-side */
  .title {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
  .title-logo {
    font-size: var(--size-h2);
    font-weight: 300;

    color: inherit;
    text-decoration: none;
  }
  .title-version {
    padding: 0.125rem 0.5rem;
    font-size: var(--size-sm);
    font-weight: 500;
    background-color: var(--gray6);
    /* half of total height */
    border-radius: calc(2 * 0.125rem + var(--size-sm) / 2);
  }

  /* right-side */
  .menu {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }
  .menu-user {
    text-align: right;
    padding: 0.5rem 1rem;
  }
  .nav-list {
    margin: 0;
    display: flex;
    flex-direction: row;
  }

  .nav-item {
    position: relative;
    display: block;

    font-weight: 600;
    text-transform: uppercase;

    padding: 0.5rem 1rem;
    border-bottom: 2px solid var(--gray7);

    &:not([data-disabled="true"]) {
      &:hover {
        background-color: var(--gray4);
      }
      &:focus {
        outline: 3px solid var(--primary8);
        z-index: 10;
      }
    }

    &[data-active="true"] {
      color: var(--primary11);
      border-bottom: 4px solid var(--primary8);
    }
    &:not([data-active="true"]) {
      padding-bottom: calc(0.5rem + 2px);
    }
  }
</style>
