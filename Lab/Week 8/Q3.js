let area = require("./area");

let side = 5;
let length = 6;
let height = 7;
let radius = 8;
console.log(`Area of square with side ${side} = ${area.square(side)}`);
console.log(
  `Area of rectangle with sides ${length} and ${height} = ${area.rectangle(
    length,
    height
  )}`
);
console.log(`Area of circle with radius ${radius} = ${area.circle(radius)}`);
