let num = prompt('Enter the number to check');

if (num == 1) {
  console.log('This is not prime or composite');
} else if (num < 1) {
  console.log('Number is not prime');
} else {
  for (var i = 2; i <= num; i++) {
    if (num % i == 0) {
      console.log(`This is not a prime number${num}`);
      break;
    } else {
      console.log(`Number is prime ${num}`);
    }
  }
}
