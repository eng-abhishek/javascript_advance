class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("This is fly function...");
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
}

class Hours extends Animal {
  color() {
    console("hours is multiple colors");
  }
}

// obj = new Animal("Monkey with Dunky...");

obj = new Hours("Monkey with Dunky...");
obj.fly();
obj.name = "Maa";
console.log(obj.name);

console.log(obj instanceof Hours);

console.log(obj instanceof Animal);
// true

let d = 0;
console.log(d instanceof Animal);
// false
