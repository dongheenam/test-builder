<script context="module">
  import { TOPICS, YEARS } from "$lib/constants";

  const TOPIC_OPTIONS = Object.entries(TOPICS).map(([key, val]) => ({
    value: key,
    label: val,
  }));
</script>

<script>
  import { ButtonIcon, Select, SelectMultiple } from "$lib/components";
  import Modal from "$lib/components/Modal.svelte";
</script>

<Modal open={true}>
  <div class="root">
    <div class="row-title">
      <h2>Edit Question</h2>
      <ButtonIcon icon="carbon:close" size={24} />
    </div>

    <div class="row-fields">
      <div class="field-year">
        <Select label="Year" options={YEARS} selected={""} />
      </div>
      <div class="field-topic">
        <Select label="Topic" options={TOPIC_OPTIONS} selected={""} />
      </div>
      <div class="field-tags">
        <SelectMultiple label="Tags" selected={[]} />
      </div>
    </div>

    <div class="row-content">
      <div class="label">Content</div>
      {#await import("$lib/components/MarkdownEditor.svelte")}
        <span>Loading the editor...</span>
      {:then MarkdownEditor}
        <MarkdownEditor.default />
      {/await}
    </div>

    <div class="row-solution">
      <div class="label">Solution</div>
      {#await import("$lib/components/MarkdownEditor.svelte")}
        <span>Loading the editor...</span>
      {:then MarkdownEditor}
        <MarkdownEditor.default />
      {/await}
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
    min-width: 4rem;
  }
  .field-tags {
    flex: 1;
  }

  .row-content :global(.bytemd) {
    height: min(450px, 30vh);
  }
  .row-solution :global(.bytemd) {
    height: min(300px, 15vh);
  }
</style>
