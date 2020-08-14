// const input = 'a whale of a deal!';

const input = "Nobody can bring you peace but yourself";

const vowels = ["u", "e", "o", "a", "i"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join("").toUpperCase());
