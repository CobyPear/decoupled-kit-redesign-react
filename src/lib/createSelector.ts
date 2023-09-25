/**
 *
 * @param selectors tailwindcss selectors
 * @returns a function that takes in a list of tailwindcss classes and returns a string prefixed by the selectors
 * @example
 * ```
 *  const firstLgMaxXL = createSelector("first:lg:max-xl");
 *                  // or createSelector("first", "lg:max-xl");
 *  cont styles = firstLgMaxXL("text-red-500", "bg-red-500");
 * ```
 */
export const createSelector = <T extends string[]>(...selectors: T) => {
  return <U extends string[]>(...args: U) => {
    return args.map((arg) => `${selectors.join(":")}:${arg}`).join(" ");
  };
};
