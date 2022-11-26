<script>
  import "katex/dist/katex.min.css";
  import { Editor, rootCtx, defaultValueCtx } from "@milkdown/core";
  import { nord } from "@milkdown/theme-nord";
  import { gfm } from "@milkdown/preset-gfm";

  import { block } from "@milkdown/plugin-block";
  // import { clipboard } from "@milkdown/plugin-clipboard";
  import { cursor } from "@milkdown/plugin-cursor";
  import { listener, listenerCtx } from "@milkdown/plugin-listener";
  import { math } from "@milkdown/plugin-math";
  import { menu, menuPlugin } from "@milkdown/plugin-menu";

  export let value = "";

  /** @type {(dom: HTMLDivElement) => void} */
  const editor = (dom) => {
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, dom);
        ctx.set(defaultValueCtx, value);
        ctx.get(listenerCtx).markdownUpdated((_ctx, markdown, _prev) => {
          value = markdown;
        });
      })
      .use(gfm)
      .use(listener)
      .use(cursor)
      .use(math)
      .use(nord)
      .use(block)
      .use(menu)
      .create();
  };
</script>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
/>

<div use:editor />

<style>
  div :global(.editor) {
    padding: 1rem 1.5rem;
  }
  div :global(.editor > *:first-child) {
    padding-top: 0;
    margin-top: 0;
  }
  div :global(.editor > *) {
    margin: 1rem 0;
  }
  div :global(.math-block:not(.ProseMirror-selectednode) > div) {
    padding: 0;
  }
  div :global(.math-block .katex-display) {
    margin: 0;
  }
</style>
