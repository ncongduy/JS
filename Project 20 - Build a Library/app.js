class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(val) {
    this._isCheckedOut = val;
  }
  toggleCheckOutStatus() {
    if (this.isCheckedOut === true) {
      this.isCheckedOut = false;
    } else {
      this.isCheckedOut = true;
    }
  }
  getAverageRating() {
    let ratingSum = this.ratings.reduce((currentSum, rating) => {
      return currentSum + rating;
    }, 0);
    let lengthOfArray = this.ratings.length;
    return ratingSum / lengthOfArray;
  }
  addRating(vote) {
    return this.ratings.push(vote);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
    constructor(artist, title) {
        super(title);
        this._artist = artist;
    }
    get artist() {
        return this._artist;
    }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.ratings);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Speed", "Jan de Bont", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.ratings);
console.log(speed.getAverageRating());

const TCS = new CD('Tring Cong Son', 'Diem Xua');
TCS.toggleCheckOutStatus();
console.log(TCS.isCheckedOut);
TCS.addRating(4);
TCS.addRating(5);
TCS.addRating(4.5);
console.log(TCS.ratings);
console.log(TCS.getAverageRating());