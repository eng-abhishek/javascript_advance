class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    console.log(this.name + " is running...");
  }

  shout() {
    console.log(this.name + " is shouting...");
  }
}
class Monkey extends Animal {
  constructor(...arg) {
    super(...arg);
  }
  eatBanana() {
    console.log(this.name + " eating Banana");
    super.shout();
  }
}

Mobj = new Monkey("chiku", "ppp");
Mobj.eatBanana();
Mobj.run();
Mobj.shout();

Aobj = new Animal("shok", "aa");
Aobj.run();
Aobj.shout();
