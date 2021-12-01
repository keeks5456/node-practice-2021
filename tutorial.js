const sum = (n1, n2) => n1 + n2;
const PI = 3.14;
class SomeMathObj {
  constructor() {
    console.log("object created ");
  }
}
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObj = SomeMathObj

//instead of calling all these exports one at a time, can make an object

module.exports = {
  sum : sum,
  PI: PI,
  SomeMathObj: SomeMathObj
}