// switch case example

// 1. JavaScript  program to input week number(1-7) and print day of week name:

var dayCount = 2;

if(dayCount == 1){
    document.write("Saturday");
}
else if(dayCount == 2){
    document.write("Sunday");
}
else if(dayCount == 3){
    document.write("Monday");
}
else if(dayCount == 4){
    document.write("Tuesday");
}
else if(dayCount == 5){
    document.write("Wedday");
}
else if(dayCount == 6){
    document.write("Thursday");
}
else if(dayCount == 7){
    document.write("Friday");
}
else{
    document.write("Invalid day number!");
}
document.write('<br>');
// 2. JavaScript  program to input month number and print total number of days in month :

var month = 2;

if (month == 1) {
    document.write("January = 31");
  }
else  if (month == 2) {
    document.write("February = 28/29");
  }
else if (month == 3) {
    document.write("March = 31");
  }
else  if (month == 4) {
    document.write("April = 30");
  }
else  if (month == 5) {
    document.write("May = 31");
  }
else  if (month == 6) {
    document.write("June = 30");
  }
else  if (month == 7) {
    document.write("July = 31");
  }
else  if (month == 8) {
    document.write("August = 31");
  }
else  if (month == 9) {
    document.write("September = 30");
  }
else  if (month == 10) {
    document.write("October = 31");
  }
else  if (month == 11) {
    document.write("November = 30");
  }
else  if (month == 12) {
    document.write("December = 31");
  }
else{
    document.write("Invalid month number!");
}
document.write('<br>');

// 4. JavaScript  program to input two numbers from user and find maximum between two numbers:

var number1 = 10;
var number2 = 20;

if(number2 > number1){
    document.write("Number 2 is maximum");
}
else{
    document.write("Number 1 is maximum");
}
document.write('<br>');

// 5. JavaScript  program to input number from user and check whether the number is even or odd:

var num = 5;

if(num % 2 == 0){
    document.write("Given number is even");
}
else{
    document.write("Given number is odd");
}
document.write('<br>');

// 6. JavaScript  program to input a number and check positive negative or zero:

var num = 0;

if(num == 0){
    document.write("Given number is zero");
}
if(num > 0){
    document.write("Given number is positive");
}
if(num < 0){
    document.write("Given number is negative");
}
document.write('<br>');
// Problems Example for if-else:

// 1. JavaScript  program to find maximum between three numbers: 

var a = 12;
var b = 4;
var c = 43;
var max;

if(a>b && a>c){
    max = a;
}
else if(b>a && b>c){
    max = b;
}
else if(c>a && c>b){
    max = c;
}
document.write(max+" is the maximum number");
document.write('<br>');

// 2. JavaScript program to check whether a number is divisible by 5 and 11 or not using if else:

var num = 55;

if((num % 5 == 0) && (num % 11 == 0))
{
    document.write("Number is divisible by 5 and 11");
}
else
{
    document.write("Number is not divisible by 5 and 11");
}
document.write('<br>');

// 3. JavaScript  program to check leap year using if else

var year = 2000;

if(((year % 4 == 0) && (year % 100 !=0)) || (year % 400==0))
    {
        document.write("Leap Year");
    }
else
    {
        document.write("Not Leap Year");
    }
document.write('<br>');

// 5. JavaScript  program to input a character from user and check whether given character is alphabet, digit or special character using if else:

var char = 'x';

if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
    {
        document.write("Given character is alphabet");
    }
else if(char >= '0' && char <= '9')
    {
        document.write("Given character is digit");
    }
else 
    {
        document.write("Given character is spetial character");
    }
document.write('<br>');

// 7. JavaScript  program to input week number(1-7) and print the corresponding day of week name using if else:

var dayCount = 9;

if(dayCount == 1){
    document.write("Saturday");
}
else if(dayCount == 2){
    document.write("Sunday");
}
else if(dayCount == 3){
    document.write("Monday");
}
else if(dayCount == 4){
    document.write("Tuesday");
}
else if(dayCount == 5){
    document.write("Wedday");
}
else if(dayCount == 6){
    document.write("Thursday");
}
else if(dayCount == 7){
    document.write("Friday");
}
else{
    document.write("Invalid day number!");
}
document.write('<br>');

// 8. JavaScript  program to check whether a triangle is valid or not if angles are given using if else:

var x = 60;
var y = 90;
var z = 30;

if((x+y+z) == 180 && x > 0 && y > 0 && z > 0) 
    {
        document.write("Triangle is valid for angle.");
    }
else
    {
        document.write("Triangle is not valid for angle.");
    }
    document.write('<br>');
// 9. JavaScript  program to input side of a triangle and check whether triangle is valid or not using if else:

var a = 8;
var b = 4;
var c = 7;

if((a+b>c) && (b+c>a) && (a+c>b)){
    document.write("Triangle is valid for side.");
}
else{
    document.write("Triangle is not valid for side.");
}
document.write('<br>');

// 10. JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else:

var a = 4;
var b = 4;
var c = 7;

if(a == b && b == c){
    document.write("Equilateral triangle.");
}
else if(a == b || b == c || c == a){
    document.write("Isosceles triangle.");
}
else 
{
    document.write("Scalene triangle.");
}
document.write('<br>');

// 11. JavaScript C program to input cost price and selling price of a product and check profit or loss:

var sellingPrice = 200;
var costPrice = 100;

if(sellingPrice > costPrice){
    document.write("Profit")
}
else{
    document.write("Loss")
}
document.write('<br>');

// 12. JavaScript  program to input marks of five subjects Physics, Chemistry, +```Biology, Mathematics and Computer, calculate percentage and grade according to given conditions:

var Physics = 92;
var Chemistry = 80;
var Biology = 55;
var Mathematics = 89;
var Computer = 85;

var avg;

avg = (Physics + Chemistry + Biology + Mathematics + Computer) / 5;


if (avg >= 90 && avg <= 100) {
  document.write('A');
}
if (avg >= 80 && avg < 90) {
  document.write("B");
}
if (avg >= 70 && avg < 80) {
  document.write("C");
}
if (avg >= 60 && avg < 70) {
  document.write("D");
}
if (avg >= 40 && avg < 60) {
  document.write("E");
}
if (avg < 40) {
  document.write('F')
}
document.write('<br>');

// 13. JavaScript  program to input basic salary of an employee and calculate gross salary according to given conditions:

var basic = 16000;
var gross = 0;
var da = 0;
var hra = 0

if(basic <= 10000){
    da  = basic * 0.8;
    hra = basic * 0.2;
}
else if(basic > 10000 && basic <= 20000)
{
    da  = basic * 0.9;
    hra = basic * 0.25;
}
else
{
    da  = basic * 0.95;
    hra = basic * 0.3;
}
gross = basic + hra + da;
document.write('Gross salary = '+gross);
document.write('<br>');

// 14. JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:

var unit = 248;
var subtotal = 0;
var total = 0;

if (unit <= 50) {
  subtotal = unit * 3;
}
if (unit > 50 && unit <= 150) {
  subtotal = 50*3 + (unit-50)*5;
}
if (unit > 150 && unit <= 250) {
  subtotal = 50 * 3 + 100*5 + (unit - 150) * 7;
}
if (unit > 250) {
  subtotal = 50 * 3 + 100 * 5 + 100 * 7 + (unit - 250) * 10;
}

total = subtotal * 0.15 + subtotal;

document.write('Subtotal: ' + subtotal + '<br>' + 'Total: ' + total);