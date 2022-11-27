<script context="module">
  import { TOPICS, YEARS } from "$lib/constants";

  const TOPIC_OPTIONS = Object.entries(TOPICS).map(([key, val]) => ({
    value: key,
    label: val,
  }));
</script>

<script>
  // @ts-nocheck
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Button, Select, SelectMultiple, TextInput } from "$lib/components";
  import { openEditor } from "./Editor.svelte";
  import { baseURL } from "$lib/utils";

  export let initialQuery;
  const year = initialQuery.year || "";
  const topic = initialQuery.topic || "";
  const tags = (initialQuery.tags && [initialQuery.tags].flat()) || [];
  const text = initialQuery.text || "";

  /** @type {HTMLFormElement | null} */
  let formElement = null;

  /** @type {svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement>} */
  const handleSubmit = (e) => {
    if (!(e.target instanceof HTMLFormElement)) return;
    const formData = new FormData(e.target);
    const params = new URLSearchParams(
      [...formData.entries()].filter(([_key, val]) => val)
    );

    goto(baseURL($page.url) + "?" + params.toString());
  };

  const onNewQuestion = () => {
    if (!formElement) return;
    const formData = new FormData(formElement);

    openEditor({
      topic: formData.get("topic"),
      yearLevel: formData.get("year"),
      tags: formData.getAll("tags"),
    });
  };
</script>

<div class="card">
  <form on:submit|preventDefault={handleSubmit} bind:this={formElement}>
    <div class="field-year">
      <Select label="Year" options={YEARS} selected={year} />
    </div>
    <div class="field-topic">
      <Select label="Topic" options={TOPIC_OPTIONS} selected={topic} />
    </div>
    <div class="field-tags">
      <SelectMultiple label="Tags" selected={tags} />
    </div>
    <div class="field-text">
      <TextInput label="Text" value={text} />
    </div>
    <Button type="submit" variant="filled" color="primary">Submit</Button>
    <Button type="button">Clear</Button>
    <div class="btn-new">
      <Button
        type="button"
        variant="outline"
        color="green"
        onClick={() => onNewQuestion()}>New Question</Button
      >
    </div>
  </form>
</div>

<style>
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
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

  .field-text {
    width: 100%;
  }

  .btn-new {
    margin-left: auto;
  }
</style>
