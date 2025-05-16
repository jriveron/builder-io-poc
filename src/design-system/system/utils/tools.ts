/**
 * Find here all the tools typescript is missing.
 */

/**
 * Create an array of a given length and fill it with the result of a function.
 *
 * @example
 * ```tsx
 *   times(3, (i: number) => i);
 *   // => [0, 1, 2]
 *   times(4, (i: number) => <div key={i}>{i}</div>);
 *   // => [<div key="0">0</div>, <div key="1">1</div>, <div key="2">2</div>, <div key="3">3</div>]
 * ```
 */
export const times = <T>(time: number, render: (i: number) => T): T[] =>
  Array.from({ length: time }, (_, i) => render(i));
