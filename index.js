function hasTargetSum(array, target) {
  // Write your algorithm here
  const visitedNums = new Set();
  for (const number of array) {
    const complement = target - number;
    if (visitedNums.has(complement))
    return true;
    visitedNums.add(number);
    console.log(visitedNums);
  }
  return false
}

console.log(hasTargetSum([22, 19, 4, 6, 30],25));


/* 
  Write the Big O time complexity of your function here
  time complexity:0(n)
  space complexity: 0(n)
*/

/* 
  Add your pseudocode here
  for loop iteration to array given
  find first comparison by substracting it from target
  iterate through values as you add them to object
*/

/*
  Add written explanation of your solution here
  take one argument from array, subtract it from target then compare it 
  to the other values in array. if it matches return true if not
  go to another value and repeat till you run out of 
  values in array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;