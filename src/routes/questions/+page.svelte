<script>
  import Search from "./Search.svelte";
  import List from "./List.svelte";
  import Editor from "./Editor.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  const questions = [
    {
      id: "1",
      topic: "ALG",
      yearLevel: 8,
      tags: ["simplify", "terms"],
      content: "Simplify $3x + 4x + 1$",
      isDraft: false,
      solution: "$7x+1$",
      authorId: "123a",
    },
    {
      id: "2",
      topic: "NUM",
      yearLevel: 7,
      tags: ["add", "fractions"],
      content: "Evaluate $\\frac{1}{2} + \\frac{1}{3}$",
      isDraft: false,
      solution: "$\\frac{5}{6}$",
      authorId: "123a",
    },
    {
      id: "3",
      topic: "NUM",
      yearLevel: 7,
      tags: ["subtract", "integers"],
      content: "Evalute $-3-(-7)$",
      isDraft: false,
      solution: "$4$",
      authorId: "123a",
    },
  ];
</script>

<svelte:head>
  <title>Questions - Maths Test Builder</title>
</svelte:head>

<main>
  <h2>Search Questions</h2>
  <Search initialQuery={data} />
  {#key data}
    <List {questions} initialQuery={data} />
  {/key}
</main>
<Editor />

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
