<script>
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
      <label>
        <span class="label">Year</span>
        <input name="year" />
      </label>
    </div>
    <div class="field-topic">
      <label>
        <span class="label">Topic</span>
        <input name="topic" />
      </label>
    </div>
    <button type="submit" class="btn bg-filled bg-filled-ia">Submit</button>
  </form>
</div>
