<script>
  import { ButtonIcon } from "$lib/components";
  import Activity from "carbon-icons-svelte/lib/Activity.svelte";
</script>

<svelte:head>
  <title>Maths Test Builder</title>
  <meta name="description" content="Write Maths tests" />
</svelte:head>

<main>
  <h1>Hello!</h1>
  <div>
    button icon:

    <ButtonIcon label="icon">
      <Activity size={24} />
    </ButtonIcon>
  </div>
</main>

<style>
</style>
