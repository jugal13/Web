function autmorphic(number) {
  let square = number ** 2;
  let string_square = square + "";
  let string_number = number + "";
  if (string_number === string_square.slice(-string_number.length)) {
    return true;
  } else {
    return false;
  }
}

console.log("25 is automorphic: " + autmorphic(25));
console.log("3 is automorphic" + autmorphic(3));
