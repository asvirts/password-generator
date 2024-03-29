const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  ",",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];

generatedPasswordEl = document.getElementById("generated-password");

// Generate Password button

function getRandomCharacter(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(characters);
  }
  return password;
}

function generateNewPassword(num) {
  generatedPasswordEl.textContent = generatePassword(num);
}

generatedPasswordEl.textContent = generatePassword(30);
