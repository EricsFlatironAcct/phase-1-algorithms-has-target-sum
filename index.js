function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = array.length-1;i>0;i--){
    for (let j = 0;j<i;j++){
      if (array[i]+array[j] === target) return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  nested for loop -> n^2
  if statement in 'i' for loop n+1 (array index)
  if statement in 'j' for loop n+2
  total Big O: n^2

*/

/* 
  Add your pseudocode here
  for each value in array
    for each remaining value in array
      if sum is equal to target
        return true
  return false if none found

*/

/*
  Add written explanation of your solution here
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
