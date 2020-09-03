const _ = {
  clamp(number, lower, upper) {
    let maxValue = Math.max(number, lower, upper);
    let minValue = Math.min(number, lower, upper);
    if (number > minValue && number < maxValue) {
      return number;
    } else if (lower > minValue && lower < maxValue) {
      return lower;
    } else if (upper > minValue && upper < maxValue) {
      return upper;
    } else {
      return "check input number again!";
    }
  },
  inRange(number, start, end) {
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    } else if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = true;
    if (start <= number && number < end) {
      return isInRange;
    } else {
      return !isInRange;
    }
  },
  words(string) {
    let words = string.split(" ");
    return words;
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    } else {
      let startPadding = Math.floor((length - string.length) / 2);
      let endPadding = length - string.length - startPadding;
      let paddedString =
        " ".repeat(startPadding) + string + " ".repeat(endPadding);
      return paddedString;
    }
  },
  has(object, path) {
    let accessValue = object[path];
    if (typeof accessValue === "undefined") {
      return false;
    } else {
      return true;
    }
  },
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, n) {
    if (!n) {
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, number) {
    if (!number) {
      number = 1;
    }
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += number) {
      let arrayChunk = array.slice(i, number + i);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
