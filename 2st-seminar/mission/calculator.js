function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const calculator = {
  add, // add: add, => 원래 이렇게 써야 하지만 key랑 value가 같으면 key만 써도 됨
  substract,
  multiply,
  divide,
};

module.exports = calculator;

//이렇게 해도 됨
// module.exports = {
//     add,
//     substract,
//     multiply,
//     divide
// };
