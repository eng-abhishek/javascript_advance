// const sayhello = () => console.log("Hello word...");
// sayhello();

// const sayhello = (name) => console.log("Hello word..." + name);
// sayhello("shyam");

// const sayhello = (syntense, name) => console.log(syntense + "..." + name);
// sayhello("Hello000", "shyam");

// const x = {
//   name: "harry",
//   role: "dev",
//   exp: 30,
//   show: function () {
//     console.log(`this is ${this.name}\nThe role is ${this.role}`);
//   },
// };

// x.show();

// const x = {
//   name: "harry",
//   role: "dev",
//   exp: 30,
//   show: function () {
//     // console.log(this);
//     let that = this;
//     setTimeout(function () {
//       console.log(`this is ${that.name}\nThe role is ${that.role}`);
//     }, 2000);
//   },
// };

// x.show();

const x = {
  name: "harry",
  role: "dev",
  exp: 30,
  show: function () {
    // console.log(this);
    // let that = this;
    setTimeout(() => {
      console.log(`this is ${this.name}\nThe role is ${this.role}`);
    }, 2000);
  },
};

x.show();
