/**
 * checks if the input is an object
 * @param {any} obj
 * @returns {boolean} true if the input is a plain object, e.g., isObject(new Date) === false
 */
export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

/**
 * removes duplicates from the inputs
 * @param  {any} args items and/or arrays of items
 * @returns {any[]} array of items without duplicates
 */
export const uniqueArray = (...args) => [...new Set(args.flat())];

/**
 * better modulo arithmetic, for example, mod(-1, n) = n-2
 * @param {number} m
 * @param {number} n
 * @returns {number} m mod n
 */
export const mod = (m, n) => (m + n) % n;

/**
 * parses the "base URL" of the URL instance
 * e.g. "http://test.com/search?text=123" => "http://test.com/search"
 * @param {URL} url
 * @returns {string} url.href without search parameters
 */
export const baseURL = (url) => url.origin + url.pathname;

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

/**
 * creates a new URLSearchParams instance from the iterator of an object
 * if a SearchParams instance is given, modify the values instead
 * @param {IterableIterator<[string, any]>} entries
 * @param {URLSearchParams} params
 * @returns {URLSearchParams}
 */
export const editSearchParams = (entries, params = new URLSearchParams()) => {
  for (const [key, value] of entries) {
    params.delete(key);
    if (!value) {
      continue;
    } else if (Array.isArray(value)) {
      value.forEach((item) => params.append(key, item));
    } else {
      params.append(key, value.toString());
    }
  }
  return params;
};
