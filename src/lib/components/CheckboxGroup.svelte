<script>
  import Checkbox from "./Checkbox.svelte";

  /** @type {any} */
  export let value;

  /** @type {any[]} */
  export let group;

  /** @type {boolean} */
  export let checked;

  $: updateCheckbox(group);
  $: updateGroup(checked);

  /** @type {(group: any[]) => void} */
  const updateCheckbox = (group) => {
    checked = group.includes(value);
  };

  /** @type {(checked: boolean) => void} */
  const updateGroup = (checked) => {
    const index = group.indexOf(value);
    if (checked) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  };
</script>

<Checkbox bind:checked {value} {...$$restProps} />
