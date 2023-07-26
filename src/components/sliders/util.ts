/**
 * Converts degrees to radians.
 * @param degrees The number of degrees to convert to radians.
 * @returns The number of radians.
 */
function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

/**
 * Draws an arc using "line to" commands.
 * @param cx The x coordinate of the center of the arc.
 * @param cy The y coordinate of the center of the arc.
 * @param radius The radius of the arc.
 * @param startAngle The starting angle of the arc in radians.
 * @param endAngle The ending angle of the arc in radians.
 *
 * @returns A string containing the path data for the arc.
 */
export function arcPath(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const steps = 100;
  const angleStep = (toRadians(endAngle) - toRadians(startAngle)) / steps;
  let angle = toRadians(startAngle);
  let x = cx + radius * Math.cos(angle);
  let y = cy + radius * Math.sin(angle);
  let path = `M ${x} ${y}`;
  for (let i = 0; i < steps; i++) {
    angle += angleStep;
    x = cx + radius * Math.cos(angle);
    y = cy + radius * Math.sin(angle);
    path += ` L ${x} ${y}`;
  }

  return path;
}
