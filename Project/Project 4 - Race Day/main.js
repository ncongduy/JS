let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisteredEarly = false;

let runnerAge = 18;

if(runnerAge > 18 && runnerRegisteredEarly){
  raceNumber += 1000;
  console.log(`You will race at 9:30 am with race number is ${raceNumber}.`);
} else if(runnerAge > 18 && !runnerRegisteredEarly){
  console.log(`You will race at 11:00 am with race number is ${raceNumber}`);
} else if(runnerAge < 18){
  console.log(`You will race at 12:30 am with race number is ${raceNumber}`);
} else {
  console.log('You can see at the registration desk.')
}

