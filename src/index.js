module.exports = function solveEquation(equation) {
  let inputData = equation.split(" ");
  let a = parseInt(inputData[0]);
  let b = parseInt(inputData[3] + inputData[4]);
  let c = parseInt(inputData[7] + inputData[8]);
  let discriminant = (b * b) - (4 * a * c);
  let x1 = Math.round( (-b + Math.sqrt(discriminant)) / (2 * a) );
  let x2 = Math.round( (-b - Math.sqrt(discriminant)) / (2 * a) );
  let solution = [];
  solution.push(x1, x2);
  solution.sort(function(a, b){ return a - b; });
  return solution;
};
