class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the animal's sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  // Method for the cat to purr
  purr() {
    console.log("purr");
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  // Method for the dog to bark
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
