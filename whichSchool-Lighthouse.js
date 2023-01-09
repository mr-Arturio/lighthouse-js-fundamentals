const whichSchool = function (age) {
  if (age < 13) {
    // console.log("Elementary School"); wrong
    return "Elementary School"
  } else if (age >= 13 && age <= 18) {
    // console.log("Secondary School"); wrong
    return "Secondary School";
  } else if (age > 18) {
    // console.log("Lighthouse Labs"); wrong
    return "Lighthouse Labs";
  }
};
// console.log not working because you supose to Return function. Spent 3000 hors on this one