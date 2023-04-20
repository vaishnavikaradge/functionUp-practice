//1. write your own find and findIndex function
// (Hint: using for loop and if else)


// ======================================================== //

/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]**/
//Answer
// a)
//   const practiceData = [[14,21,23,64], [33,46,51,65]]

// function increament(arr){

//     const incrementedData = arr.map((array)=> {
//        return array.map((element) => element+1) ;  // for second requirement use filter
//    }) ;
   
//    return incrementedData

// }

//console.log(increament(practiceData))

// * requirement two
// * from the above array, create an array of array of even numbers using a higher order method and for loop
// * solution = [[14,64], [46]]

// Using a higher order method

// const practiceData = [[14,21,23,64], [33,46,51,65]]
// const evenNumbers = practiceData.map(innerArray =>
//     innerArray.filter(num => num % 2 === 0)
//   );
  
//   console.log(evenNumbers);
 

//2.
//const array = [23 , 45,467, 789, 34, 989, 56]

// problem => return an array such that numbers at odd idex are multiplied by 2
// and numbers at even index are multiplied by 10

// const modifiedArray = array.map((num, index) => {
//   if (index % 2 === 0) {
//     return num * 10;
//   } else {
//     return num * 2;
//   }
// });

//  console.log(modifiedArray); // [230, 90, 4670, 1578, 340, 1978, 560]

//3.
// const carBrands = ["honda", "toyota", "maruti","tata"]
//  const carModel = ["city", "innova", "alto", "nano"]
 
// let carObj = {}

// carBrands.forEach((car, index)=> {
//     carObj[car] = carModel[index]   
// })

// console.log(carObj)

// *  Flattening
// Use the reduce method 
// to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

//4.
// const arrays = [[1, 2, 3], [4, 5], [6]];
// // result =  [1, 2, 3, 4, 5, 6]

// const flattenedArray = arrays.reduce((accumulator, currentArray) => {
//   return accumulator.concat(currentArray);
// }, []);

// console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

// * return an array with all words converted into uppercase using higher order function
// * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
//5. 
//const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

// // Using map() function to convert each word to uppercase
// const uppercaseCountries = countries.map(country => country.toUpperCase());

// console.log(uppercaseCountries); // ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']


  
