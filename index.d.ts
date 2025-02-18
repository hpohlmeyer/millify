/**
 * Options used to configure Millify.
 */
interface MillifyOptions {
  /**
   * The number of significant figures.
   */
  precision: number;
  /**
   * The type of decimal marker (e.g. period ".").
   */
  decimalSeparator: string;
  /**
   * Convert units to lower case.
   */
  lowercase: boolean;
  /**
   * Add a space between the number and the unit.
   */
  space: boolean;
  /**
   * A list of units to use.
   */
  units: string[];
}
