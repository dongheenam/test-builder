/**
 * checks if the input is an object
 * @param {any} obj
 * @returns true if the input is a plain object, e.g., isObject(new Date) === false
 */
export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

/**
 * removes duplicates from the inputs
 * @param  {...any} args items and/or arrays of items
 * @returns array of items without duplicates
 */
export const uniqueArray = (...args) => [...new Set(args.flat())];

/**
 * better modulo arithmetic, for example, mod(-1, n) = n-2
 * @param {number} m
 * @param {number} n
 * @returns m mod n
 */
export const mod = (m, n) => (m + n) % n;
