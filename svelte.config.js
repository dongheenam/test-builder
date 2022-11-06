import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: {
      plugins: [nested(), autoprefixer()],
    },
  }),
  kit: {
    adapter: adapter(),
  },
};

export default config;
