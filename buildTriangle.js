function makeLine(length) {
  let line = "";
  for (let k = 1; k <= length; k++) {
    line += "* ";
  }
  return line + "\n"; // what is /n?
}
function buildTriangle(length) {
  let triangle = "";
  let lineNumber = 1;
  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber); // chew on that
  }
  return triangle;
}

console.log(buildTriangle(10));