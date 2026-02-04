// function add(num) {
//   let sum = 0;
//   while (num > 0) {
//     rem = num % 10;
//     sum += rem;
//     num = Math.floor(num / 10);
//   }
//   console.log(sum);
// }
// add(1234);


function isPalindromeNumber(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  if (original === reversed) {
    console.log(original + " is a palindrome.");
  } else {
    console.log(original + " is not a palindrome.");
  }
}

isPalindromeNumber(1221);
