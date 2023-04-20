
//1.print all even numbers in first 50 natural numbers
// for(let i=1;i<=50;i++){

//     if(i%2==0){
//         console.log(i);
//     }
// }

//OUPUT:-
// 2
// 4 
// 6 
// 8 
// 10
// 12
// 14
// 16
// 18
// 20
// 22
// 24
// 26
// 28
// 30
// 32
// 34
// 36
// 38
// 40
// 42
// 44
// 46
// 48
// 50

//2.print all odd numbers in natural numbers from 20 to 50
// for(var i=20; i<=50; i++){

//     if(i%2!=0){
//         console.log(i);
//     }

// }

//OUTPUT:-
// 21
// 23
// 25
// 27
// 29
// 31
// 33
// 35
// 37
// 39
// 41
// 43
// 45
// 47
// 49

//3.print all numbers that are divisible by 5
// let arr=[12,45,67,89,90,34,35,55];

// for(let i=0; i<arr.length; i++){

//     if(arr[i]%5==0){
//         console.log(arr[i]);
//     }

// }

//OUTPUT:-
// 45
// 90
// 35
// 55


//4.print all prime numbers occuring in 1st 50 natural numbers

// for(let i=1; i<=50; i++){
//     if(i==1){

//         console.log("1 is not a prime number")
//     }
    
//     for(var j=2; j<i; j++){

//         //we use here var because var can define globally

//         if(i%j==0){

//             break;
//         }
//     }

//     if(i==j){
//         console.log(i);
//     }
// }

//OUTPUT:-
// 1 is not a prime number
// 2 
// 3 
// 5 
// 7 
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47


//5.Print all the numbers of this array
// [[1,2], [3,4], [5,6], [7,8]]

// const arr = [[1,2], [3,4], [5,6], [7,8]];

// for(let i = 0; i<arr.length; i++){

//     for(let j = 0; j<arr[i].length; j++){

//         console.log(arr[i][j]);
//     }
// }

//OUTPUT:-
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8