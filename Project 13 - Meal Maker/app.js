const menu = {
  _course: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._course.appetizers;
  },
  set appetizers(appetizerIn) {
    if (typeof appetizerIn === "object") {
      this._course.appetizers = appetizerIn;
    } else {
      console.log("You must type in object data.");
    }
  },
  get mains() {
    return this._course.mains;
  },
  set mains(mainsIn) {
    if (typeof mainsIn === "object") {
      this._course.mains = mainsIn;
    } else {
      console.log("You must type in object data.");
    }
  },
  get desserts() {
    return this._course.desserts;
  },
  set desserts(dessertsIn) {
    if (typeof dessertsIn === "object") {
      this._course.mains = dessertsIn;
    } else {
      console.log("You must type in object data.");
    }
  },
  get course() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    if (
      (courseName === "appetizers" && typeof dishPrice === "number") ||
      (courseName === "mains" && typeof dishPrice === "number") ||
      (courseName === "desserts" && typeof dishPrice === "number")
    ) {
      const dish = {
        courseName,
        dishName,
        dishPrice,
      };
      return this.course[courseName].push(dish);
    } else {
      return console.log(
        "Please check dictation of course name or number of dish price again."
      );
    }
  },
  getRandomDishFromCourse(courseName) {
    if (
      courseName === "appetizers" ||
      courseName === "mains" ||
      courseName === "desserts"
    ) {
      const dishes = this.course[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    } else {
      return "Please choose appetizers, mains or desserts";
    }
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    if (
      typeof appetizer === "undefined" ||
      typeof main === "undefined" ||
      typeof dessert === "undefined"
    ) {
      return "We sorry! Please choose appetizers, mains or desserts again.";
    } else {
      const totalPrice =
        appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
      return `Your meal is ${appetizer.dishName}, ${main.dishName}, ${dessert.dishName}. The total price is $${totalPrice}.`;
    }
  },
};

menu.addDishToCourse("appetizers", "Caesar Salad 1", 4.25);
menu.addDishToCourse("appetizers", "Caesar Salad 2", 4.35);
menu.addDishToCourse("appetizers", "Caesar Salad 3", 4.45);
menu.addDishToCourse("mains", "Salad 1", 5.25);
menu.addDishToCourse("mains", "Salad 2", 5.35);
menu.addDishToCourse("mains", "Salad 3", 5.45);
menu.addDishToCourse("desserts", "Caesar 1", 6.35);
menu.addDishToCourse("desserts", "Caesar 2", 6.45);
menu.addDishToCourse("desserts", "Caesar 3", 6.55);

let meal = menu.generateRandomMeal();
console.log(meal);

menu.appetizers = [1, 2, 3];
menu.mains = [1, 2, 3];
menu.desserts = [1, 2, 3];