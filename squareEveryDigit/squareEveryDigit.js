function squareDigits(num) {
  if (num === 0) return 0;
  let result = "";
  let str = num.toString().split("");

  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    let square = digit ** 2;
    result += square.toString();
  }
  return parseInt(result);
}
