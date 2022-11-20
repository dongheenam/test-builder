<script context="module">
  import { TOPICS, YEARS } from "$lib/constants";

  const TOPIC_OPTIONS = Object.entries(TOPICS).map(([key, val]) => ({
    value: key,
    label: val,
  }));
</script>

<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Button, Select, SelectMultiple } from "$lib/components";
  import TextInput from "$lib/components/TextInput.svelte";
  import { baseURL } from "$lib/utils";

  export let initialQuery;
  const year = initialQuery.year || "";
  const topic = initialQuery.topic || "";
  const tags = (initialQuery.tags && [initialQuery.tags].flat()) || [];
  const text = initialQuery.text || "";

  /** @type {svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement>} */
  const handleSubmit = (e) => {
    if (!(e.target instanceof HTMLFormElement)) return;
    const formData = new FormData(e.target);
    const params = new URLSearchParams(
      //@ts-ignore
      [...formData.entries()].filter(([_key, val]) => val)
    );

    goto(baseURL($page.url) + "?" + params.toString());
  };
</script>

<div class="card">
  <form on:submit|preventDefault={handleSubmit}>
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
    <button type="submit" class="btn bg-filled bg-filled-ia">Submit</button>
    <Button>Reset</Button>
  </form>
</div>

<style>
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
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
</style>
