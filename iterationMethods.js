//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
******************************************************************/
const greaterNum = numbers.filter(function (num){
    return num >= 25;
});
console.log(greaterNum);
// 2) Create a new array containing numbers that are divisible by 5.
const divisibleByFive = numbers.filter(function(num){
    return num % 5 === 0;
});
console.log(divisibleByFive);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
******************************************************************/
const squaredNum = numbers.map(function(num){
    return num ** 2;
});
console.log(squaredNum);

// 4) Create a new array that contains each number multiplied by 2.
const multipliedNum = numbers.map(function(num){
    return num * 2;
});
console.log(multipliedNum);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
******************************************************************/
const greaterSquareNum = numbers.filter(function(num){
    return num >= 20;
}).map(function(num){
    return num ** 2;
});
console.log(greaterSquareNum);

// 6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
const divisibleFiveMultiplyByTwo = numbers.filter(function(num){
    return num % 5 === 0 ;
}).map(function(num){
    return num * 3;
});
console.log(divisibleFiveMultiplyByTwo);

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array){
    array.forEach(element => {
       console.log(element); 
    });
}
logger(numbers);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = (celsiusArray) => celsiusArray.map((temperature) => (temperature - 32) * (5/9));
const convertTemp = toCelsius(numbers);
console.log(convertTemp);

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/


/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
