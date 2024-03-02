let a = prompt("belgi kriting");
let b = +prompt("soni kriting ");
let d = +prompt("ikkinchi soni kriting ");
switch (a) {
  case "+":
    console.log(`${b} + ${d} = ${b + d}`);
    break;
  case "-":
    console.log(`${b} - ${d} = ${b - d}`);
    break;
  case "/":
    console.log(`${b} / ${d} = ${b / d}`);
    break;
  case "*":
    console.log(`${b} * ${d} = ${b * d}`);
    break;
  case "%":
    console.log(`${b} % ${d} = ${b % d}`);
    break;
  //   default:
  // console.log("notogri narsa berilgan");
}
