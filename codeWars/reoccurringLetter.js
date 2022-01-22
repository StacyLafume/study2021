// Create a function that accepts 2 string arguments and returns 
// an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

const strCount = (str, letter) =>{
    const dict = {}
    for(let i = 0; i<str.length; i++){
      dict[str[i]] ?  dict[str[i]]++ :  dict[str[i]] = 1
    }
   return dict[letter] ? dict[letter] : 0
}

console.log(strCount("Hello", "o"))
console.log(strCount("Hello", "l"))
console.log(strCount("", "z"))
