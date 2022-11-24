import { fromSearchParams } from "$lib/utils";

/** @type {import('./$types').PageLoad} */
export const load = ({ url }) => {
  const params = url.searchParams;
  return fromSearchParams(params);
};
