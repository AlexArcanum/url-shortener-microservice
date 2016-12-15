var codeString = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789";
var base = codeString.length;



function intToBase(num) {
  var encoded = "";

  while (num) {
    var remainder = num % base;
    num = Math.floor(num / base);
    encoded = codeString[remainder].toString() + encoded;
  }

  return encoded;
}

function baseToInt(string) {
  var decoded = 0;

  while (string) {
    var index = codeString.indexOf(str[0]);
    var power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.substring(1);
  }

  return decoded;
}

module.exports.intToBase = intToBase;
module.exports.baseToInt = baseToInt;