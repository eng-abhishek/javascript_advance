/* For More : https://www.youtube.com/watch?v=ByhtOgF6uYM */
/* Code Fist any code allot to the Execution Context and Menory Allocation 
   In menory allocation set all the veriable as undefile and define all the 
   function after that one by one assign each veriable to the menory and move it to 
   the call stack the concept of call stack is that LIFO Last In First Out
   and for function it again generate a environment and aganin assign veriable to memory
   allocation and memory execution.
*/

function a() {
  console.log("a");
  b();
}

function b() {
  console.log("b");
  c();
}
function c() {
  console.log("c");
}

a();
b();
c();
