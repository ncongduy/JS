// *
// * Version 1
// *
function getSleepHours(day) {
  day = day.toLowerCase();
  let hoursOfNight;
  switch (day) {
    case "monday":
      hoursOfNight = 7.5;
      break;
    case "tuesday":
      hoursOfNight = 7.5;
      break;
    case "wednesday":
      hoursOfNight = 7;
      break;
    case "thursday":
      hoursOfNight = 8;
      break;
    case "friday":
      hoursOfNight = 7.5;
      break;
    case "saturday":
      hoursOfNight = 7;
      break;
    case "sunday":
      hoursOfNight = 8;
      break;
  }
  return hoursOfNight;
}

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You have the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
    console.log(
      `You over ${actualSleepHours - idealSleepHours} hours your ideal sleep.`
    );
  } else {
    console.log("You should get some rest.");
    console.log(
      `You under ${idealSleepHours - actualSleepHours} hours your ideal sleep.`
    );
  }
};

calculateSleepDebt();

// *
// * Version 2
// *
const getActualSleepHours = () => 7.5 * 3 + 8 * 2 + 7 * 2;

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(7.5);
  if (actualSleepHours === idealSleepHours) {
    console.log("You have the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
    console.log(
      `You over ${actualSleepHours - idealSleepHours} hours your ideal sleep.`
    );
  } else {
    console.log("You should get some rest.");
    console.log(
      `You under ${idealSleepHours - actualSleepHours} hours your ideal sleep.`
    );
  }
};

calculateSleepDebt();
