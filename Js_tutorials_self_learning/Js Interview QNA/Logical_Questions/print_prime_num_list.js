let fr_num = 10;
let sr_num = 20;
for (i = fr_num + 1; i <= sr_num - 1; i++) {
  for (j = 2; j <= i; j++) {
    if (i <= 1) {
      break;
    }
    if (i % j == 0) {
      break;
    }
  }
  if (i == j) {
    console.log(i + " = is prime");
  } else {
    console.log(i + " = is not prime num");
  }
}
