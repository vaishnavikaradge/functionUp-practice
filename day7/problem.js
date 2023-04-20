//problem 1
//if the number is even and less than 15 , print a
//if the number is even and more than 15, print b
//if the number is odd and less than 10, print c
//if the number is odd and more than 10, print d

// function printNum(num){

//     if(num%2==0 && num<15){
         
//         console.log("a")

//     }else if(num%2==0 && num>15){
       
//         console.log("b")
//     }
//     else if(num%2!=0 && num < 10){

//         console.log("c")
//     }
//     else{

//         console.log("d")
//     }

// }

//  printNum(16)

//problem 2
//Result
//answer should be: "Hi, my name is Farheena"
//we need to solve this using for loop

// for(let i = 0; i<1; i++){

//     console.log("Hi, my name is Vaishnavi")
// }


//problem 3
//global scope and local scope

// let x

// for(x=0; x<1; x++){
    
//     let y=7 //here y has a local scope
//     console.log("x has global scope")
//     console.log(y +" "+" has local scope")

// }

// console.log(x)



//problem 4
//create a variable called myName and store your name inside it. then, add Mr./Miss. before it and store the result in a new variable with the same name i.e myName

// let myName = "Vaishnavi"

// myName = "Miss."+ " " + myName

// console.log(myName)

// output:-
// Miss. Vaishnavi

// problem 5
// Find sum and multiplication of all natural numbers from 10 to 20
// let sum=0
// let multi=1

// for(let i = 10; i <= 20; i++){

//     sum = sum + i;
//     multi = multi * i;

// }

// console.log("Sum: " + sum)
// console.log("Multiplication: "+ multi)

//Output:-
// Sum: 165
// Multiplication: 6704425728000

//problem 6
//check whether a given year is leap year
// create a variable and store a random year in it now write code, which should return true or false,depending  whether the value in the above variable is leap yera or not

// let year = 2016
 
// if(year%4 == 0 && year%100 != 0 || year%400 == 0){

//     console.log(year + " "+ " is a leap year")
// }
// else{

//     console.log(year + " "+ " is not a leap year")
//} 

//output:-
//2016  is a leap year


//problem 7
//find the area of triangle . lengths of its sides are 5,6,7

//s*(s-a)*(s-b)*(s-c)
//   let s
//   const a=5
//   const b=6
//   const c=7

//  s = (a+b+c)/2

// const areaOfTriangle = (s*(s-a)*(s-b)*(s-c))
// console.log(areaOfTriangle)

//problem 8
//create two variables and store numbers in them.
// Now, write code, which return true if one of the variable is 50 or if their sum is 50.
// Otherwise, you need to return false.
// Also handle edge cases
// (in real world, these two numbers will be supplied by the users.
// Now think what if they supply something which is not a number ?)

// function returnTrueFalse(x,y){

//     if(x == 50 || y == 50 || (x+y==50))
//     {
//         return true
//     }
//     else{

//         return false
//     }
// }

//console.log(returnTrueFalse(25,21))

//problem 9
// create a variable and store a number inside it
// write program to check whether a given variable is between 100 and 200
// write program to check whether a given variable is between 100 and 200 or 400 and 500
// handle edge cases

// let num = 123
// if(num >= 100 && num <= 200){

//     console.log("The number is between 100 and 200")
// }else if((num >= 100 && num <= 200) || (num >= 400 && num <= 500)){

//     console.log("The number is between 100 to 200 or between 400 to 500")
// }else{

//     console.log("The number is not between 100 to 200 or between 400 to 500")
// }


//Problem 10
//you have 3 numbers.
//write a program which can find the largest number

// function findLargestNum(num1,num2,num3){

//     if(num1>=num2 && num1 >=num3){

//         console.log(num1 + " " + "is a largest number")
//     }else if(num2 >= num1 && num2 >= num3){

//         console.log(num2 +" "+"is a largest number")
//     }else{

//         console.log(num3 + " " + "is a largest number")
//     }

// }


//findLargestNum(34,45,235)


//Problem 11
//create two variables and assign numbers to them
// now write a code which returns true if one of them is 8 or their sum or difference is 8. Otherwise it should return false


// function returnTOrF(x,y){

//     if((x == 8)|| (y == 8)||(x+y==8)||(x-y==8)){

//         return true
//     }else{
    
//         return false
//     }

// }

// console.log(returnTOrF(12,18))

