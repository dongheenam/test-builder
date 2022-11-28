<script>
  // disable type checking until questions logic is complete
  // @ts-nocheck

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Edit from "carbon-icons-svelte/lib/Edit.svelte";
  import TaskAdd from "carbon-icons-svelte/lib/TaskAdd.svelte";

  import {
    Checkbox,
    CheckboxGroup,
    Select,
    ButtonIcon,
    Badge,
  } from "$lib/components";
  import { SORT_OPTIONS, TOPICS, TOPIC_COLORS } from "$lib/constants";

  export let questions = [];
  export let initialQuery;

  // sort questions
  let sort = initialQuery.sort || "-updatedAt";
  const onSortChange = () => {
    const url = $page.url;
    const params = url.searchParams;
    params.set("sort", sort);
    goto(url);
  };

  // question checkboxes
  let selectedQuestions = [];
  $: numQuestions = questions.length;
  $: numSelected = selectedQuestions.length;
  $: allSelected = numQuestions === numSelected;
  $: someSelected = !allSelected && numSelected > 0;
  const onToggleAll = () => {
    if (allSelected) {
      selectedQuestions = [];
    } else {
      selectedQuestions = questions.map((e) => e.id);
    }
  };
</script>

<div class="card">
  <!-- top row -->
  <div class="header">
    <div class="header-check">
      <Checkbox
        checked={allSelected}
        indeterminate={someSelected}
        onChange={() => onToggleAll()}
      />
    </div>
    <div class="header-info">
      <span>{numSelected} selected</span>
      <button class="btn-bucket">(add to bucket)</button>
    </div>
    <div class="header-count">
      showing {numQuestions} result{numQuestions === 1 ? "" : "s"}
    </div>
    <div class="header-field-sort">
      <Select
        options={SORT_OPTIONS}
        bind:selected={sort}
        onChange={() => onSortChange()}
      />
    </div>
  </div>

  <!-- questions -->
  <div class="questions-list">
    {#each questions as question}
      <div class="question">
        <div class="question-check">
          <CheckboxGroup bind:group={selectedQuestions} value={question.id} />
        </div>
        <div class="question-badges">
          <Badge>{question.yearLevel}</Badge>
          <Badge color={TOPIC_COLORS[question.topic]} uppercase
            >{TOPICS[question.topic]}</Badge
          >
          {#each question.tags as tag}
            <Badge rounded class="badge-tag">{tag}</Badge>
          {/each}
        </div>
        <div class="question-content">{question.content}</div>
        <div class="question-btns">
          <ButtonIcon>
            <Edit size={20} />
          </ButtonIcon>
          <ButtonIcon>
            <TaskAdd size={20} />
          </ButtonIcon>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 1px solid var(--gray6);
  }

  .header-info {
    display: flex;
    gap: 0.25em;
    align-items: baseline;
    color: var(--gray11);
  }
  .btn-bucket {
    display: inline;
    color: var(--primary11);
  }
  .btn-bucket:hover {
    text-decoration: underline;
  }
  .header-count {
    margin-left: auto;
    color: var(--gray11);
  }
  .header-field-sort {
    padding-bottom: 0.25rem;
  }

  .questions-list {
    display: grid;
  }

  .question {
    padding: 1rem 0;

    display: grid;
    grid-template-columns: 1.5rem 1fr 4rem;
    grid-template-rows: auto;
    grid-template-areas:
      "checkbox badges  btns"
      ".        content .";
    align-items: center;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.75rem;
  }
  .question:not(:first-of-type) {
    border-top: 1px solid var(--gray6);
  }
  .question-check {
    grid-area: checkbox;
  }
  .question-badges {
    grid-area: badges;
    display: flex;
  }
  .question-badges :global(.badge-tag) {
    margin-left: 0.5rem;
  }
  .question-btns {
    grid-area: btns;
    font-size: 24px;
  }
  .question-content {
    grid-area: content;
  }
</style>
