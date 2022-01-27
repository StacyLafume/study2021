
// Complete the square sum function so that it squares 
// each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

// brute force
const squareSum1 = numbers => {
    let answer = 0
    for (let i = 0; i < numbers.length; i++){
        answer +=  Math.pow(numbers[i], 2)
    }
    return answer 
  }

const squareSum2 = (numbers) => {
    if (numbers.length > 0 ){
      const noZeros = numbers.filter((n)=> n !== 0)
      const answer = noZeros.reduce((acc, cv)=>{
      return acc + cv**2 
    }, 1)
      return answer - 1
    }else{
      return 0
    }
}

// refactored
const squareSum = (numbers) => numbers.reduce((acc, cv)=> acc + (cv**2), 0)

console.log(squareSum([1,2])) // 5
console.log(squareSum([0, 3, 4, 5])) // 50
console.log(squareSum([])) // 0