class Animal {
  constructor(name) {
    this.name = Animal.captilize(name); // ClassName.StaticMathodName(param)
  }

  walk() {
    console.log(`${this.name} is running...`);
  }

  static captilize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

obj = new Animal("dog");
obj.walk();
