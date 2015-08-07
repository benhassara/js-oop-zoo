var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation) {
  // change the location property to newLocation

  this.location = newLocation;
  return this.location;
};

Zoo.prototype.open = function() {
  // change status property to open

  this.status = 'open';
  return this.status;
};

Zoo.prototype.close = function() {
  // change status property to closed

  this.status = 'closed';
  return this.status;
};

Zoo.prototype.isOpen = function() {
  // return whether or not the Zoo is open

  if (this.status === 'open')
    return 'Open!';
  else if (this.status === 'closed')
    return 'Closed!';
};

Zoo.prototype.addAnimal = function(newAnimal) {
  // adds a new Animal obj to the animals property

  // do not add an animal unless the Zoo is open
  if (this.status === 'closed')
    return "The zoo is closed.";

  // do not allow addition of anything but Animal objects
  else if(!(newAnimal instanceof Animal))
    return "That's not an Animal!";

  // do not add duplicates
  else if(this.isDupe(newAnimal))
    return "That animal is already in this zoo.";

  // no issues, add to animals array
  else {
    this.animals.push(newAnimal);
    return this.animals;
  }
};

Zoo.prototype.isDupe = function(newAnimal) {
  // checks whether newAnimal is already in the animals array

  // if there's no animals, can't be a duplicate
  if (this.animals.length === 0)
    return false;

  var check = this.animals.every(function(za){
    // the Animal objs are the same if they share these 3 properties
    return (za.name === newAnimal.name) && (za.age === newAnimal.age) && (za.kind === newAnimal.kind);
  });

  return check;
};

Zoo.prototype.removeAnimal = function(animal) {
  // remove an Animal from animals array

  // only remove animals if zoo is open
  if (this.status !== 'open')
    return "Sorry, the zoo is closed.";

  // splice out of animals array and return the obj
  return this.animals.splice(this.animals.indexOf(animal), 1)[0];
};

module.exports = Zoo;
