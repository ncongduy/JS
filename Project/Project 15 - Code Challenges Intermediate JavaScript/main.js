// reverseArray()

// Write your code here:
const reverseArray = (oldArray) => {
  let newArray = [];
  for (let i = oldArray.length - 1; i >= 0; i--) {
    newArray.push(oldArray[i]);
  }
  return newArray;
};

// When you're ready to test your code, uncomment the below and run:

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
// ------------------------------------------------------------------------------------------------------

// greetAliens()

// Write your code here:
const greetAliens = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `Oh powerful ${array[i]}, we humans offer our unconditional surrender!`
    );
  }
};

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// ------------------------------------------------------------------------------------------------------

// convertToBaby()

// Write your code here:
const convertToBaby = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push("baby " + array[i]);
  }
  return newArray;
};

// When you're ready to test your code, uncomment the below and run:

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));
// ------------------------------------------------------------------------------------------------------

// declineEverything() and acceptEverything()

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Write your code here:
const declineEverything = (arrays) => {
  arrays.forEach((array) => politelyDecline(array));
};

declineEverything(veggies);

const acceptEverything = (arrays) => {
  arrays.forEach((array) =>
    console.log(`Ok, I guess I will eat some ${array}.`)
  );
};

acceptEverything(veggies);
// ------------------------------------------------------------------------------------------------------

// squareNums()

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:
const squareNums = (arrays) => {
  return arrays.map((number) => toSquare(number));
};

console.log(squareNums(numbers));
console.log(numbers);
// ------------------------------------------------------------------------------------------------------

// shoutGreetings()

// Write your code here:
const shoutGreetings = (arrays) => {
  let newArray = [];
  arrays.forEach((array) => {
    newArray.push(array.toUpperCase() + "!");
  });
  return newArray;
};

// Feel free to uncomment out the code below to test your function!

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
// ------------------------------------------------------------------------------------------------------

// sortYears()

// Write your code here:
const sortYears = (years) => {
  return years.sort(function (a, b) {
    return b - a;
  });
};

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
// ------------------------------------------------------------------------------------------------------

// justCoolStuff()

// Write your code here:
const justCoolStuff = (arr1, arr2) => {
  let newArray = [];
  arr1.filter((arr) => {
    for (let i = 0; i < arr2.length; i++) {
      if (arr === arr2[i]) {
        newArray.push(arr);
      }
    }
  });
  return newArray;
};

// Feel free to uncomment the code below to test your function

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
// ------------------------------------------------------------------------------------------------------

// isTheDinnerVegan()

// Write your code here:
const isTheDinnerVegan = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source !== "plant") {
      return false;
    } else {
      return true;
    }
  }
};

// Feel free to comment out the code below to test your function

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner)); // Should print false

const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" },
];

console.log(isTheDinnerVegan(meal)); // Should return true
// ------------------------------------------------------------------------------------------------------

// sortSpeciesByTeeth()

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:
const sortSpeciesByTeeth = (arr) => {
  return arr.sort((a, b) => {
    return a.numTeeth - b.numTeeth;
  });
};

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray));

// Should print [ { speciesName: 'human', numTeeth: 32 },
// { speciesName: 'dog', numTeeth: 42 },
// { speciesName: 'shark', numTeeth: 50 },
// { speciesName: 'alligator', numTeeth: 80 } ]
// ------------------------------------------------------------------------------------------------------

// findMyKeys()

// Write your code here:
const findMyKeys = (arrs) => {
  return arrs.findIndex((arr) => {
    return arr === "keys";
  });
};

// Feel free to comment out the code below to test your function
const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
// Should print 4
// ------------------------------------------------------------------------------------------------------

// dogFactory()

// Write your code here:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(nameIn) {
      if (typeof nameIn === "string") {
        this._name = nameIn;
      } else {
        console.log("You must type string character.");
      }
    },
    get breed() {
      return this._breed;
    },
    set breed(breedIn) {
      if (typeof breedIn === "string") {
        this._breed = breedIn;
      } else {
        console.log("You must type string character.");
      }
    },
    get weight() {
      return this._weight;
    },
    set weight(weightIn) {
      if (typeof weightIn === "number") {
        this._weight = weightIn;
      } else {
        console.log("You must type number.");
      }
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      return this.weight++;
    },
  };
};
