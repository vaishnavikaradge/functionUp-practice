// const person = {
//     name: "Akash",
//     mobile: 999999999,
//     address: {
//         pincode: 1234,
//         city: "gurgaon",
//         state: "haryana",
//         emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
//     },
// };

//  //Solution:-
// console.log(person)

//  person.name = "Rahul";
//  person.address.pincode=4567;
//  person.address.emails="asd@outlook.com";
 
 //console.log(person)



/**
 * 
 * 
 * make a copy of the person object and in that copy 
 * change its name to "Rahul",  
 * pincode to 4567 
 * and first email in the list to 'asd@outlook.com'
 * 
 * make sure that original person is not affected by these operation
 * 
 *  your new person should look like this 
 * const newPerson = {
    name:"Rahul",
    mobile:999999999,
    address:{
        pincode:4567,
        city:"gurgaon",
        state:"haryana",
        emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com']
    }
}
  
 *  CAUTION: DO NOT USE JSON.parse(JSON.stringify())
    Hint: use destructuring at every level, i.e. copy each level shallowly
 */





/**
 * explain the difference between primitive and non primitive data types when we use the following operator
 * 1. assignment operator
 * 2. equality operator
 */

//1.assignment operator
// const a = 10;
// console.log(a);

//2.equality operator

// const x = "45";
// if(x===45){
//     console.log("Namaste");
// }else{
//     console.log("Not equal");
// }

//use strictly ===