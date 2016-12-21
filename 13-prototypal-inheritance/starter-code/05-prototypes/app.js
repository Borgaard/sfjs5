function Dog(name, breed){
  this.name = name;
  this.breed = breed;
}

Dog.prototype.species = "Canis Canis";
Dog.prototype.bark = function(){return "Woof! I'm "+this.name+" the floof!"}

let dot = new Dog("Dot", "Corgi");
let soyworth = new Dog("Soyworth", "Basenji");
