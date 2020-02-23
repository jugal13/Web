function square(side) {
  return side * side;
}

function rectangle(length, width) {
  return length * width;
}

function circle(radius) {
  return Math.PI * radius * radius;
}

module.exports = {
  square: square,
  rectangle: rectangle,
  circle: circle
};
