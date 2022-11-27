<script context="module">
  import { writable } from "svelte/store";
  import { TOPICS, YEARS } from "$lib/constants";

  // editor store
  export const editorIsOpen = writable(false);
  export const emptyQuestion = {
    topic: "",
    yearLevel: "",
    tags: [],
    content: "",
    solution: "",
  };
  export const questionInEditor = writable(emptyQuestion);

  /** @type {(question: Partial<typeof emptyQuestion>) => void} */
  export const openEditor = (question) => {
    questionInEditor.set({ ...emptyQuestion, ...question });
    editorIsOpen.set(true);
  };

  const TOPIC_OPTIONS = Object.entries(TOPICS).map(([key, val]) => ({
    value: key,
    label: val,
  }));
</script>

<script>
  import { Button, ButtonIcon, Select, SelectMultiple } from "$lib/components";
  import Modal from "$lib/components/Modal.svelte";
</script>

<Modal open={$editorIsOpen}>
  <div class="root">
    <div class="row-title">
      <h2>Edit Question</h2>
      <ButtonIcon
        icon="carbon:close"
        size={24}
        onClick={() => ($editorIsOpen = false)}
      />
    </div>

    <div class="row-fields">
      <div class="field-year">
        <Select
          label="Year"
          options={YEARS}
          bind:selected={$questionInEditor.yearLevel}
        />
      </div>
      <div class="field-topic">
        <Select
          label="Topic"
          options={TOPIC_OPTIONS}
          bind:selected={$questionInEditor.topic}
        />
      </div>
      <div class="field-tags">
        <SelectMultiple label="Tags" bind:selected={$questionInEditor.tags} />
      </div>
    </div>

    <div class="row-content">
      <div class="label">Content</div>
      {#await import("$lib/components/MarkdownEditor.svelte")}
        <span>Loading the editor...</span>
      {:then MarkdownEditor}
        <MarkdownEditor.default bind:value={$questionInEditor.content} />
      {/await}
    </div>

    <div class="row-solution">
      <div class="label">Solution</div>
      {#await import("$lib/components/MarkdownEditor.svelte")}
        <span>Loading the editor...</span>
      {:then MarkdownEditor}
        <MarkdownEditor.default bind:value={$questionInEditor.solution} />
      {/await}
    </div>

    <div class="row-btns">
      <Button>Clear</Button>
      <Button color="primary" variant="filled">Save question</Button>
    </div>
  </div>
</Modal>

<style lang="postcss">
  .root {
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .row-title {
    margin-bottom: 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .row-title h2 {
    margin-top: 0;
  }

  .row-fields {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .field-year {
    min-width: 4rem;
  }
  .field-topic {
    min-width: 9rem;
  }
  .field-tags {
    flex: 1;
  }

  .row-btns {
    display: flex;
    gap: 12px;

    justify-content: flex-end;
  }
</style>
