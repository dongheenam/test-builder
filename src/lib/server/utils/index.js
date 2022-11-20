/**
 * parse a URLSearchParams instance to an object
 * @param {URLSearchParams} params
 * @returns {Record<string, any>}
 */
export const fromSearchParams = (params) => {
  /** @type {Record<string, any>} */
  let parsed = {};
  for (const key of params.keys()) {
    const val = params.getAll(key);
    parsed[key] = val.length > 1 ? val : val[0];
  }
  return parsed;
};
