console.log("hello");
console.log("hello again");

//Given a 32-bit signed integer, reverse digits of an integer.

function returnReverse(num) {
  let stringedNum = num.toString();
  let a = stringedNum.split("");
  let b = a.reverse().join();

  return b;
}

console.log(returnReverse(123));
