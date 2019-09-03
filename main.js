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
const typedin = document.getElementById("typedin").value

const translate = () => {
  console.log("fegsefd")
typedin.split(" ").map(function(word) {
  word.split("").map(function(letter){
    typedinConverted.push(morseKey[letter]);
    typedinConverted.push(" ");
  });
  typedinConverted.push("\xaO\xaO\xaO\xaO");
});
}
document.getElementById("translated").innerHTML =typedinConverted.join(
  ""
);






function conv() {
  var input = "Hello World";
  var output = input.replace(
    "Hello World",
    ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
  );
  console.log(output);
}

module.exports = conv;
