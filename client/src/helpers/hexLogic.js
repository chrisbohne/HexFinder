// flat or pointy Layout

const Orientation = (f0,f1,f2,f3,b0,b1,b2,b3,startAngle) => {
  return {f0, f1, f2, f3, b0, b1, b2, b3, startAngle}
}

export const Layout = (orientation, size, origin) => ({ orientation, size, origin})

export const flatLayout = Orientation(
  3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0),
  2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0,
  0.0
);

export const pointyLayout = Orientation(
  Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0,
  Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0,
  0.5
);

// Point on Screen
export const Point = (x,y) => ({x,y})

// Hex Element (sum needs to equal 0)
export const Hex = (x, y, z) => Math.round(x + y + z) === 0 && ({x,y,z})

// calculating with Hex
const hexAdd = (a,b) => Hex(a.x + b.x, a.y + b.y, a.z + b.z)

// Get Neighbors
const hexDirections = [
  Hex(1, 0, -1), // top right
  Hex(1, -1, 0), // bottom right
  Hex(0, -1, 1), // bottom
  Hex(-1, 0, 1), // bottom left
  Hex(-1, 1, 0), // top left
  Hex(0, 1, -1), // top
];

const hexDirection = (direction) => hexDirections[direction]

export const hexNeighbor = (hex, direction) => hexAdd(hex, hexDirection(direction))

// Converting Point and Hex

export const hexToPixel = (layout, hex) => {
  const M = layout.orientation;
  const size = layout.size;
  const origin = layout.origin;
  const x = (M.f0 * hex.x + M.f1 * hex.y) * size.x;
  const y = (M.f2 * hex.x + M.f3 * hex.y) * size.y;
  return Point(x + origin.x, y + origin.y);
}

export const pixelToHex = (layout, point) => {
  const M = layout.orientation;
  const size = layout.size;
  const origin = layout.origin;
  const pt = Point((point.x - origin.x) / size.x, (point.y - origin.y) / size.y);
  const x = M.b0 * pt.x + M.b1 * pt.y;
  const z = M.b2 * pt.x + M.b3 * pt.y;
  return Hex(x, -x - z, z);
}

export const hexRound = (hex) => {
  let xR = Math.round(hex.x);
  let yR = Math.round(hex.y);
  let zR = Math.round(hex.z);
  const xDiff = Math.abs(xR - hex.x);
  const yDiff = Math.abs(yR - hex.y);
  const zDiff = Math.abs(zR - hex.z);
  if (xDiff > yDiff && xDiff > zDiff) {
    xR = -yR - zR;
  } else if (yDiff > zDiff) {
    yR = -xR - zR;
  } else {
    zR = -xR - yR;
  }
  return Hex(xR, yR, zR);
}

// create Hex Corners

const hexCornerOffset = (layout, corner) => {
  const M = layout.orientation;
  const size = layout.size;
  const angle = 2.0 * Math.PI * (M.startAngle - corner) / 6.0;
  return Point(size.x * Math.cos(angle), size.y * Math.sin(angle));
}

export const hexCorners = (layout, hex) => {
  const corners = [];
  const center = hexToPixel(layout, hex);
  for (let i = 0; i < 6; i++)
  {
      const offset = hexCornerOffset(layout, i);
      corners.push(Point(center.x + offset.x, center.y + offset.y));
  }
  return corners;
}

