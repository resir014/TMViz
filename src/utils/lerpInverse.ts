/**
 * Get the delta of a number between two other numbers
 */
export default function lerpInverse(value: number, a: number, b: number) {
  return a === b ? 0 : (value - a) / (b - a) // prevent division by 0
}
