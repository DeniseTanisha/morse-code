function sum(a, b) {
  return a + b;
}

function conv() {
  var input = "Hello World";
  var output = input.replace(
    "Hello World",
    ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
  );
  console.log(output);
}

module.exports = conv;

module.exports = sum;
