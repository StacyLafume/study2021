// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// const following_day = day => {

//   switch (day) {
//     case "monday":
//       alert("The next day is Tuesday!");
//       break;
//     case "tuesday":
//       alert("The next day is Wednesday!");
//       break;
//     case "wednesday":
//       alert("The next day is Thursday!");
//       break;
//     case "thursday":
//       alert("The next day is Friday!");
//       break;
//     case "friday":
//       alert("The next day is saturday!");
//       break;
//     case "saturday":
//       alert("The next day is Sunday!");
//       break;
//     case "sunday":
//       alert("The next day is Monday!");
//       break;
//     default:
//       alert("Pleas enter a proper day of the week!");
//       break;
//   }
// };
// let day = prompt("Enter a day of the week: ").toLowerCase();
// following_day(day)

// Final values
// Take a look at the following program.

// let nb1 = Number(prompt("Enter nb1:")); // 1
// let nb2 = Number(prompt("Enter nb2:")); // 2
// let nb3 = Number(prompt("Enter nb3:")); // 3

// if (nb1 > nb2) {
//   // false
//   nb1 = nb3 * 2; // (if this was true) nb = 6
// } else {
//   nb1++; // nb1 = 2
//   if (nb2 > nb3) {
//     // false
//     nb1 += nb3 * 3; // nb1 = 15
//   } else {
//     nb1 = 0; // (if this was true)  nb1 = 0
//     nb3 = nb3 * 2 + nb2; // nb3 = 8
//   }
// }
// console.log(nb1, nb2, nb3); // 0, 2, 8
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

//Initial values	           nb1 final value         	nb2 final value	        nb3 final value
// nb1=nb2=nb3=4			            4                        4                         4
// nb1=4,nb2=3,nb3=2			        4                        3                         2
// nb1=2,nb2=4,nb3=0	            2                       4                      0

// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account

// const days30 = ["4", "6", "9", "11"];

// let month = prompt(
//   "Enter a number of the month you would like to know the number of days it has: "
// );

// const get_days_for_month = (month) => {
//   if (typeof +month !== "number") {
//     return alert("please enter a number 1 through 12");
//   }
//   if (+month > 12 || +month < 1){
//     return alert("please enter a number 1 through 12");
//   }
//   if (days30.includes(month)) {
//     return alert(30);
//   } else if (month === "2") {
//     return alert(28);
//   } else {
//     return alert(31);
//   }
// };

// get_days_for_month(month); 

// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

let hours = prompt(
  "Enter hours: "
);

let minutes = prompt(
  "Enter minutes: "
);

let seconds = prompt(
  "Enter seconds: "
);

const get_next_second = (hours, minutes, seconds) => {
  if(+seconds === 59 && +minutes === 59 ){
   return alert(`2   ${+hours + 1} hrs ${+minutes * 0}mins ${+seconds * 0}secs`)
  }else if (+seconds === 59) {
    return  alert(`1    ${+hours} hrs ${+minutes + 1}mins ${+seconds * 0}secs`)
  }else if( +hours === 23 && (+minutes === 59 && +seconds === 59)){
    return alert(`3  ${+hours * 0} hrs ${+minutes * 0}mins ${+seconds * 0}secs`)
  }else{
    return alert(`4  ${+hours}hrs ${+minutes}mins ${+seconds +1}secs`)
  }
}
 
get_next_second (hours, minutes, seconds)