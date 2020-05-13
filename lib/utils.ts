/**
 * parseValue ensures the value is a number and within accepted range.
 *
 * @param {number} value
 */
export function parseValue(value: number): number {
  const val: number = parseFloat(String(value));

  if (isNaN(val)) {
    throw new Error(`Input value is not a number`);
  }
  if (val > Number.MAX_SAFE_INTEGER || val < Number.MIN_SAFE_INTEGER) {
    throw new RangeError("Input value is either too big or too small");
  }
  return val;
}

/**
 * Rounds a number [value] up to a specified [precision].
 *
 * @param {number} value - Number to be rounded
 * @param {number} precision - Significant places
 */
export function roundTo(value: number, precision: number): number {
  if (!Number.isFinite(value)) {
    throw new Error("Input value is not a finite number");
  }
  if (!Number.isInteger(precision) || precision < 0) {
    throw new Error("Precision is not a positive integer");
  }
  if (Number.isInteger(value)) {
    return value;
  }
  return parseFloat(value.toFixed(precision));
}
