function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function() {
  // increment Animal age by one

  this.age++;
  return this.age;
};

Animal.prototype.wakeUp = function() {
  // wake it up, set awake to true

  this.awake = true;
  return this.awake;
};

Animal.prototype.sleep = function() {
  // put to sleep, set awake to false

  this.awake = false;
  return this.awake;
};

Animal.prototype.feed = function() {
  // feed the animal if it's awake, otherwise say that it's sleeping

  if (this.awake)
    return 'NOM NOM NOM';
  else
    return 'This animal is asleep!';
};

module.exports = Animal;
