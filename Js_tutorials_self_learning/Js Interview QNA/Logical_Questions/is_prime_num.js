let num = 11;
for (i = 2; i <= num - 1; i++) {
  if (num <= 1) {
    break;
  }

  if (num % i == 0) {
    break;
  }
}
if (num == i) {
  console.log(num + " = is prime");
} else {
  console.log(num + " = is not prime num");
}
