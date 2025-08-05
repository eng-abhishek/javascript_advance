// parent class method will overwride with child class method

class Employee {
  constructor(empName) {
    this.name = empName;
    console.log("Employee constructor is here....");
  }

  login() {
    console.log(`${this.name} is login`);
  }

  logout() {
    console.log(`${this.name} is logout`);
  }

  requestLeave(leavres) {
    console.log(`${this.name} has requested ${leavres} leaves - auto approved`);
  }
}

class Programmer extends Employee {
  /*
 constructor(...arg) {
    super(...arg);
  }
    // this constructor created by java script engin automatically if you are not created it 
    // ...arg is a argument, constructor with argument
*/
  requestcoffee(x) {
    console.log(`${this.name} has requested ${x} coffee`);
  }

  // here overwrite the requestLeave method
  requestLeave(leavres) {
    super.requestLeave(4);
    // console.log(
    //   `${this.name} has requested ${leavres + 1} leaves (one extra leave)`
    // );
  }
}

// empObj = new Employee("Abhishek");
// empObj.login();
// empObj.requestLeave(5);
// empObj.logout();

progObj = new Programmer("Vidya");
progObj.requestLeave(1);
progObj.requestcoffee(1);
