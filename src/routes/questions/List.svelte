<script>
  import { Checkbox, Select } from "$lib/components";

  const SORT_OPTIONS = [
    { value: "-updatedAt", label: "newest first" },
    { value: "updatedAt", label: "oldest first" },
  ];
</script>

<div class="card">
  <!-- top row -->
  <div class="header">
    <div class="check-all">
      <Checkbox />
    </div>
    <div class="check-info">
      <span>0 selected</span>
      <button class="btn-bucket">(add to bucket)</button>
    </div>
    <div class="count">showing 0 results</div>
    <div class="field-sort">
      <Select options={SORT_OPTIONS} />
    </div>
  </div>

  <!-- questions -->
</div>

<style>
  .header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 1px solid var(--gray6);
  }

  .check-all {
    font-size: var(--size-xl);
  }
  .check-info {
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
  .count {
    margin-left: auto;
    color: var(--gray11);
  }
  .field-sort {
    padding-bottom: 0.25rem;
  }
</style>
