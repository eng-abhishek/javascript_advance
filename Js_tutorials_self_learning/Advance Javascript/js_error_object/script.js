// =========== Error object ===============

// try {
//   console.log(ram);
// } catch (error) {
//   console.log(error); // it give you over all error
//   console.log(error.name); // Neme is : ReferenceError
//   console.log(error.message); // Message is : ram is not defined
// }

// =========== Custom Error ===============

// try {
//   throw new Error("Harry is not defile"); // custom error
// } catch (error) {
//   console.log(error);
// }

// =========== Custom Reference Error ===============

// try {
//   throw new ReferenceError("Harry is not defile"); // custom ReferenceError
//   throw new SyntaxError("Harry is not defile"); // custom ReferenceError
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

// =========== Actual Use Of Custom Error ===============

try {
  let age = 16;
  if (age < 18) {
    throw new Error("Please enter valid age..");
  }
} catch (error) {
  console.log(error);
}
