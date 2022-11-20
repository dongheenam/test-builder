import { fromSearchParams } from "$lib/server/utils";

/** @type {import('./$types').PageServerLoad} */
export const load = ({ url }) => {
  const params = url.searchParams;
  return fromSearchParams(params);
};
