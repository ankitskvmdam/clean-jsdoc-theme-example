/**
 * Concrete shapes built on top of the {@link geometry} primitives.
 *
 * @module shapes
 */

import type { Point, Shape } from './geometry';

/**
 * A circle defined by a center {@link Point} and a radius.
 *
 * @category Shapes
 * @example
 * const c = new Circle({ x: 0, y: 0 }, 2);
 * c.area();     // 12.566…
 * c.diameter(); // 4
 */
export class Circle implements Shape {
  /** Human-readable label for the shape. */
  readonly name = 'circle';

  /**
   * @param center - the circle's center point.
   * @param radius - the circle's radius, in the same units as the center.
   */
  constructor(
    public readonly center: Point,
    public readonly radius: number,
  ) {}

  /**
   * Compute the enclosed area (πr²).
   *
   * @returns the area of the circle.
   */
  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  /**
   * The distance across the circle through its center.
   *
   * @returns twice the radius.
   */
  diameter(): number {
    return this.radius * 2;
  }

  /**
   * Build a unit circle (radius `1`) centered at the origin.
   *
   * @returns a new {@link Circle}.
   */
  static unit(): Circle {
    return new Circle({ x: 0, y: 0 }, 1);
  }
}

/**
 * Convenience helpers for building common shapes.
 *
 * @category Shapes
 */
export namespace Factory {
  /** The radius used by {@link Factory.smallCircle}. */
  export const SMALL_RADIUS = 0.5;

  /**
   * Build a small circle centered at the origin.
   *
   * @returns a {@link Circle} with radius {@link Factory.SMALL_RADIUS}.
   */
  export function smallCircle(): Circle {
    return new Circle({ x: 0, y: 0 }, SMALL_RADIUS);
  }
}
