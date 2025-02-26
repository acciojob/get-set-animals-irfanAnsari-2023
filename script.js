//complete this code
class Animal {
	constructor(species:string){
		this.species = species;
	}

	get species():string{
		return this.species;
	}

	makeSound():void{
		console.log(`The ${this._species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(species: string) {
    super(species); 
  }
	purr():void{
		console.log("purr");
	}
}

class Cat extends Animal {

	constructor(species: string) {
    super(species); 
  }
	bark():void{
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
