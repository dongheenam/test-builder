<script>
  import { mod, uniqueArray } from "$lib/utils";
  import Icon from "./Icon.svelte";

  /** @type {string | undefined} */
  export let label;

  /** @type {string | undefined} */
  export let name = label?.toLowerCase();

  /** @type {string[]} */
  export let selected = [];

  /** @type {string[]}*/
  export let options = [];

  // elements
  /** @type {HTMLElement} */
  let inputElement;
  /** @type {HTMLElement} */
  let optionsElement;

  // input value
  let query = "";

  // item currently on focus
  let focusedIndex = 0;

  // controlling options visibility
  let isOpen = false;
  const open = () => (isOpen = true);
  /** @type {svelte.JSX.EventHandler<FocusEvent, HTMLElement>} */
  const tryClose = (event) => {
    const nextFocus = event.relatedTarget;
    if (
      nextFocus instanceof HTMLElement &&
      [inputElement, optionsElement].includes(nextFocus)
    )
      return;
    isOpen = false;
    focusedIndex = 0;
  };

  $: filteredOptions = uniqueArray(
    query,
    options.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
  );

  /**
   * toggles given item from selection
   * @param {string} input
   */
  const toggleItem = (input) => {
    if (input === "") return;
    if (selected.includes(input)) {
      selected = selected.filter((item) => item !== input);
    } else {
      selected = uniqueArray(selected, input);
      options = uniqueArray(options, input).sort();
      query = "";
    }
  };
  const toggleFocused = () => toggleItem(filteredOptions[focusedIndex]);

  /**
   * handles keydown events for the component
   * @type {svelte.JSX.EventHandler<KeyboardEvent, HTMLInputElement>}
   */
  const onKeyDown = (event) => {
    switch (event.code) {
      case "ArrowUp":
        focusedIndex = mod(focusedIndex - 1, filteredOptions.length);
        break;
      case "ArrowDown":
        focusedIndex = mod(focusedIndex + 1, filteredOptions.length);
        break;
      case "Backspace":
        if (query !== "") return;
        toggleItem(selected[selected.length - 1]);
        break;
      case "Enter":
      case "Space":
        toggleFocused();
        query = "";
        break;
      default:
        focusedIndex = 0;
    }
  };
</script>

<div class="root">
  <span class="label">{label}</span>
  <!-- hidden select component for forms -->
  <div class="select-container">
    <select multiple {name} bind:value={selected}>
      {#each options as item}
        <option value={item} />
      {/each}
    </select>
  </div>
  <div class="input-container">
    <div class="controls">
      {#each selected as item}
        <button
          class="item-btn"
          type="button"
          tabindex="-1"
          on:click={() => toggleItem(item)}
        >
          <span>{item}</span>
          <Icon icon="carbon:close" />
        </button>
      {/each}
      <input
        class="input"
        type="text"
        tabindex="0"
        bind:value={query}
        bind:this={inputElement}
        on:keydown|stopPropagation={onKeyDown}
        on:focus={() => open()}
        on:blur={(e) => tryClose(e)}
      />
    </div>
    {#if selected.length}
      <button
        class="clear-btn"
        tabindex="-1"
        type="button"
        on:click={() => {
          selected = [];
        }}
      >
        <Icon icon="carbon:close" />
      </button>
    {/if}
    <span class="icon">
      <Icon icon="carbon:chevron-down" />
    </span>
  </div>
  <!-- options -->
  <div class="options-container">
    <ul
      class="options"
      class:open={isOpen}
      tabindex="-1"
      bind:this={optionsElement}
      on:blur={(e) => tryClose(e)}
    >
      {#each filteredOptions as item, idx}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          class="option"
          class:selected={selected.includes(item)}
          class:focused={focusedIndex === idx}
          on:click={() => toggleFocused()}
          on:pointerenter={() => (focusedIndex = idx)}
        >
          {item}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="postcss">
  .root {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  .input-container {
    width: 100%;
    min-height: 2em;
    padding: 0 0.25rem 0 0.5rem;
    border: 1px solid var(--gray7);
    border-radius: var(--radius-item);

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.25rem;

    &:focus-within {
      outline: 3px solid var(--primary8);
    }
    & *:focus {
      outline: none;
    }
  }

  .controls {
    flex-grow: 1;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 0.5rem;
  }

  .item-btn {
    display: flex;
    gap: 0.125rem;

    padding: 0.125em 0.25em;
    margin: 0.25rem 0;
    font-size: var(--size-sm);
    font-weight: 500;
    background-color: var(--gray2);
    border: 1px solid var(--gray7);
    border-radius: 2px;

    & :global(.icon) {
      color: var(--gray10);
    }
  }
  .item-btn,
  .clear-btn {
    color: var(--gray11);
  }
  .item-btn:hover,
  .clear-btn:hover {
    background-color: var(--gray3);
    & :global(.icon) {
      color: var(--gray12);
    }
  }

  .input {
    display: block;
    flex: 1;
    height: calc(2em - 2px);
    width: min-content;
    min-width: 5em;
    text-align: left;

    cursor: text;
    border: none;
  }

  .options-container {
    width: 100%;
    position: relative;
  }
  .options {
    display: none;

    position: absolute;
    top: 0.5rem;

    width: 100%;
    max-height: 15em;
    overflow-y: auto;
    margin: 0;
    padding: 0;

    background-color: var(--bg);
    border: 1px solid var(--gray7);
    border-radius: var(--radius-item);
    box-shadow: var(--shadow-xs);
  }
  .options.open {
    display: block;
  }
  .option {
    height: 1.5em;
    padding: 0 0.5rem;

    cursor: pointer;
  }
  .option.focused {
    background-color: var(--primary3);
  }
  .option.selected {
    color: var(--primary11);
    font-weight: 500;
  }

  .select-container {
    display: none;
  }
</style>
