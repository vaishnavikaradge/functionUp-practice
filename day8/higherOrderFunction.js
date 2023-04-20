//problem 1:-

//write your own find and findIndex function
// (Hint: using for loop and if else)

//   const arr = ['pune', 'bengluru','hyderabad','mumbai','nashik','nagapur']

//   function find(word){
    
//     let element

//     for(let i = 0; i<arr.length; i++){
        
//         if(arr[i] === word){

//             element = arr[i]
//             console.log("index: "+ i)
//         }        

//     }

//     return element;
//   }
  
//  console.log(find("hyderabad"))


//const newArr= arr.find(element => element == 'pune')
// const newArr1= arr.findIndex(element => element == 'pune')

// console.log(newArr)
// console.log(newArr1)

//problem 2

//const practiceData = [[14,21,23,64], [33,46,51,65]]
/*
  requirement one
  increment each number by one and output the resultant array using a higher order method and for loop
  HINT: use nesting
  solution =  [[15,22,24,65], [34,47,52,66]]
  
  requirement two
  from the above array, create an array of array of even numbers using a higher order method and for loop
  solution = [[14,64], [46]]
 */

//   function increment(arr){

//     const incrementData = arr.map((array)=>{
//         return array.map((element)=>element+1)
//     })

//     return incrementData
//   }

//   console.log(increment(practiceData))

//  function even(arr){ 

//     const evenData = arr.map((array)=>{

//         return array.filter((element)=>element%2===0)
//     })

//     return evenData

//  }

//  console.log(even(practiceData))


//problem 3

const array = [23 , 45,467, 789, 34, 989, 56]

// problem => return an array such that numbers at odd idex are multiplied by 2
// and numbers at even index are multiplied by 10

function indexMulti(x){ 

    let resultOddIndex
    let resultEvenIndex
    for(let i = 0; i<array.length; i++){
  
        if(i%2 != 0){

            resultOddIndex = array[i]*2
            
            console.log("OddIndexNum:"+ resultOddIndex)
         }else{

            resultEvenIndex = array[i]*10
            
            console.log("EvenINdexNum:"+ resultEvenIndex)
         }
    } 
    
     return x
 }

  console.log(indexMulti(array))