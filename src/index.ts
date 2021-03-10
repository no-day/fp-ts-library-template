/** @since 1.0.0 */

// --------------------------------------------------------------------------------------------------------------------
// Greetings
// --------------------------------------------------------------------------------------------------------------------

/**
 * It's a greeting
 *
 * @since 1.0.0
 * @category Greetings
 * @example
 * import {greet} from "mylib"
 * assert.deepStrictEqual(greet("World"), 'Hello, World!')
 */
export const greet = (name: string) => `Hello, ${name}!`;
