<script context="module">
  const YEARS = ["", "7", "8", "9", "10", "11", "12"];
  const TOPICS = {
    "": "",
    NUM: "number",
    ALG: "algebra",
    MEAS: "measurement",
    GEO: "geometry",
    STAT: "statistics",
    PROB: "probability",
    CALC: "calculus",
  };
  const TOPIC_OPTIONS = Object.entries(TOPICS).map(([key, val]) => ({
    value: key,
    label: val,
  }));
</script>

<script>
  import { Select, SelectMultiple } from "$lib/components";
  import TextInput from "$lib/components/TextInput.svelte";

  /** @type {svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement>} */
  const handleSubmit = (e) => {
    if (!(e.target instanceof HTMLFormElement)) return;
    const formData = new FormData(e.target);
    console.log([...formData.entries()]);
  };
</script>

<div class="card">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="field-year">
      <Select label="Year" options={YEARS} />
    </div>
    <div class="field-topic">
      <Select label="Topic" options={TOPIC_OPTIONS} />
    </div>
    <div class="field-tags">
      <SelectMultiple label="Tags" />
    </div>
    <div class="field-text">
      <TextInput label="Text" />
    </div>
    <button type="submit" class="btn bg-filled bg-filled-ia">Submit</button>
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
