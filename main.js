const morseKey = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": "/"
};

// words to morse

decodeMorse = function(morseCode) {
  function decodeMorseLetter(Letter) {
    return morseKey[letter];
  }
  function decodeMorseWord(word) {
    return word
      .split("")
      .map(decodeMorseLetter)
      .join("");
  }
  return morseCode
    .trim()
    .split(" ")
    .map(decodeMorseWord)
    .join("");
};

function conv() {
  var input = "Hello World";
  var output = input.replace(
    "Hello World",
    ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
  );
  console.log(output);
}

module.exports = conv;
