class School {
  constructor(name, level, numberStudent) {
    this._name = name;
    this._level = level;
    this._numberStudent = numberStudent;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberStudent() {
    return this._numberStudent;
  }
  set numberStudent(val) {
    if (typeof val === "number") {
      this._numberStudent = val;
    } else {
      console.log("Invalid input: numberStudent must be set to a Number.");
    }
  }
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberStudent} students at the ${this.level} school level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let index = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[index];
  }
}

class PrimarySchool extends School {
  constructor(name, numberStudent, pickupPolicy) {
    super(name, "primary", numberStudent);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
    constructor(name, numberStudent) {
        super(name, 'middle', numberStudent);
    }
}

class HighSchool extends School {
  constructor(name, numberStudent, sportsTeams) {
    super(name, "high", numberStudent);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

const thongTayHoi = new MiddleSchool("Thong Tay Hoi", 1232);
thongTayHoi.quickFacts();

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
alSmith.quickFacts();
alSmith.sportsTeams;
