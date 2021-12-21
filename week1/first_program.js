// Write a program that displays your name and age. Here's the result for mine.

const log_person = (name, age) => console.log(`this person's name is ${name} and they are ${age} years old!`);

log_person("Stacy", 23);

// Minimalistic calculator
// Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.

const simple_calculator = (num1,num2) => {
    console.log(
        'adding is:',num1 + num2,
        'subtracting is: ', num1 - num2,
        'multiplying is: ', num1 * num2,
        'dividing is: ', num1 / num2,

    )
}

simple_calculator(6,3);

// Values prediction
// Observe the following program and try to predict the values it displays.

console.log( "prediction1:\n",4 + 5); // 9
console.log("4 + 5"); // "4 + 5"
console.log("4" + "5"); // "45"

// Final values
// Observe the following program and try to predict the final values of its variables.

let a = 2;// 2
a -= 1; // 1
a++;// 2
let b = 8; // 8
b += 2; // 10
const c = a + b * b; // 102
const d = a * b + b; // 30
const e = a * (b + b); // 40
const f = a * b / a; // 10
const g = b / a * a; // 10
console.log("prediction2: ",a, b, c, d, e, f, g);

// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const get_raw_price = price => price * .206;
console.log(get_raw_price(5.16));

// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

const get_Fahrenheit = celsius => celsius * 9/5 + 32;
console.log(get_Fahrenheit(60), 'degrees Fahrenheit');


let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
number1 = 3;
number2 = 5;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.