//const places =['delhi', 'gurgaon', 'jaipur', 'pune']
//const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

//1. remove first element from places array and print the remaining array

 const places =['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// const [a,...b] = places
// console.log(b)

//output:-
//[ 'gurgaon', 'jaipur', 'pune' ]

//2.insert that element at the start of morePlaces array and print the new array

// const a = places[0]
// const newArr=[a,...morePlaces]
// console.log(newArr)

//output:-
//[ 'delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar' ]

//3. take out last three element from the morePlaces array and take out first three elements from the places array print hte combined array

// const [a,...b] = morePlaces
// const [c,d,e,...f]= places

// const newArr =[ [b]+ "," + [c,d,e] ]
// console.log(newArr)

//Output:-
//[ 'hyderabad,Shimla,Srinagar,delhi,gurgaon,jaipur' ]

//4.destructure and store pincode into a variable named myPincode

const myData ={

    name: "Rahul",
    age:20,
    gender: "male",
    address:{

        pinCode: 123455,
        city: "delhi",

    },
    likes:["music", "movies"]

  }

// const {address: {pinCode: myPincode}} = myData

// console.log(myPincode)

//output:- 
//123455


//5. destructure and store second like into a variable named myLike

const {likes:myLike}= myData
console.log(myLike)