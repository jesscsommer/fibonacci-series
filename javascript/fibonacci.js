function fibonacci(num) {
  // type your code here

  if (num < 2){
    return num
  }

  last_two = [0, 1]

  for (let i=2; i <= num; i++){
    sum = last_two[0] + last_two[1]
    last_two = [last_two[1], sum]
  }
  return last_two[1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

