// let x = 5;
// let y = 6;
// let z = x * y;

// let a = 3;
// let x = (100 + 50) * a; 

// let x = 5;
// x += 5;


// let text1 = "78";
// let text2 = "54";
// let result = text1 < text2;

// let text1 = "hadiza is a very";
// text1 += "tired fellow";


// let x = 6 + 7;
// let y = "6" + 7;
// let z = "hello" + 5;


// let x = 12;
// let y = 7;
// let z = x - y;

// let x = 12;
// let y = 7;
// let z = x % y;


// let text = "hello"; text += "world";

// let x = 10;
// x **= 5;


// let x = -100;
// let >>>= 5;


// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.


//  let age = parseInt( prompt ("enter your number"));
//   if (age > 12) {
//     alert ( `pay 5`)
//   }
//  else if ( age < 18 ) {
//     alert ( `pay 10`)
//  }
//  else if (age < 60) {
//     alert (`Pay 20`)
//  } 
//  else {
//     alert (`pay 15`)
//  }

//   Write a program that determines if a year is a leap year.

// let year = parseInt(prompt ("enter your number"));
// if (year%2===0) {
//     alert(`leap year`)
    
// }
// else {
//     alert(`not a leap year`)
// }


//  Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0


//  Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.

  let time = parseInt(prompt ("enter your time 1-24"));
  if (time >= 1 && time <12){
    alert("Good Morning")
  }else if (time >=12 && time <17){
    alert("Good Afternoon")
  }else if(time >=17 && time <=24){
    alert("Good Evening")
  }else{
    alert("Enter a valid time number")
  }

