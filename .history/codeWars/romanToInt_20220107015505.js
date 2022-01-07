/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s =>{
    const romanDict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M':1000}
    const arrayOfnumerals = [...s]
    let count = 0
    for(let i = 0; i < arrayOfnumerals.length; i++) {
     if(romanDict[arrayOfnumerals[i]] < romanDict[arrayOfnumerals[i+1]]){
        count += (romanDict[arrayOfnumerals[i+1]] - romanDict[arrayOfnumerals[i]])
         i+=1
        }else {
            count += romanDict[arrayOfnumerals[i]]
        }
    }
    return count 
};