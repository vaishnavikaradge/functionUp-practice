const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];
//1.a)
// function profileLookup(name, property) {

//     for (let index = 0; index < facebookProfiles.length; index++) {
//         const student = facebookProfiles[index];  // we got students details in student variable {}

//         if(name === student.firstName){
//             if(student.hasOwnProperty(property)){  
//                 return student[property]  // student.number  // this will get executed in case of true
//             } else {
//                 return "no such property"   /// fasle, means property nahi hai
//             }
//         }
        
//     }

//     return "person does not exist"  // it will reach to this only when there is no match
// }

// console.log(profileLookup("Pritesh", "number"))


// b)complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']
// function getNamesFromGurgaon(facebookProfiles) {

//     const personList = facebookProfiles.filter( person => person.address.location === "gurgaon")
//     const result = personList.map((person => person.firstName + " " + ( person.hasOwnProperty("lastName") ? person.lastName : "" )))
//     return result 
// }

//  console.log(getNamesFromGurgaon(facebookProfiles))

// 2(a) complete this function, which takes state name as argument and return the name 
// of one of its residents
// function findFullName(stateName) {
//     const personList = facebookProfiles.filter(person=>person.address.state===stateName)
//     const result = personList.map((person=>person.firstName + " " + (person.hasOwnProperty("lastName") ? person.lastName : "" )))
//     return result 
// }
// console.log(findFullName("rajasthan"))

// function getDLStatus(facebookProfiles) {
//     const peopleFromGurgoan = facebookProfiles.filter( people => people.address.location === "gurgaon")

//     const result = []

//     peopleFromGurgoan.forEach( people => {

//         const {firstName, lastName, hasDrivingLicense} = people
        
//         let nameWithStatus = ''

//         if(lastName) {  //undefined in boolean is false
//             nameWithStatus = nameWithStatus + firstName + " " + lastName
//         } else {
//             nameWithStatus = nameWithStatus + firstName
//         }

//         if(hasDrivingLicense){
//             nameWithStatus = nameWithStatus + " - D/L"
//         } else{
//             nameWithStatus = nameWithStatus + " - N D/L"
//         }
//         result.push(nameWithStatus)
//     })

//     return result
// }

// console.log(getDLStatus(facebookProfiles))

// /3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// // like shown in the example below
// // ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// // =================================== 4 ===================================== //

// function getFullName(facebookProfiles) {
//     const result = [];
  
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       const profile = facebookProfiles[i];
  
//       if (profile.address && profile.address.location === "gurgaon") {
//         const fullName = `${profile.firstName} ${profile.lastName || ""}`.trim();
//         const drivingLicenseStatus = profile.hasDrivingLicense ? "D/L" : "N D/L";
//         result.push(`${fullName} - ${drivingLicenseStatus}`);
//       }
//     }
  
//     return result;
//   }

//   const gurgaonProfiles = getFullName(facebookProfiles);
//   console.log(gurgaonProfiles);
  // Output: ["Pritesh Kumar - N D/L", "Jay - D/L"]


// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// function getLikes(facebookProfiles) {
//     return facebookProfiles.map(profile => `${profile.firstName} ${profile.lastName}`).filter(name => name.trim() !== '');
//   }
  
//   console.log(getLikes(facebookProfiles)); // Output: ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay']

// 5. write a function which returns all likes of all the people in an array
// hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// function getNameFromDelhiWithDL(facebookProfiles){
//     const allLikes = [];
//     for (const profile of facebookProfiles) {
//       if (profile.likes) {
//         allLikes.push(...profile.likes);
//       }
//     }
//     return allLikes;
//   }

// const allLikes = getNameFromDelhiWithDL(facebookProfiles);
// console.log(allLikes); // output: ['music', 'movies', 'code', 'driving', 'travel', 'driving', 'food', 'mobile']
    
//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// function getNameOfDriverWithoutDL(facebookProfiles) {
//     const person = facebookProfiles.find(
//       (profile) =>
//         profile.address.location.toLowerCase() === "delhi" && profile.hasDrivingLicense
//     );
  
//     if (person) {
//       return `${person.firstName} ${person.lastName}`;
//     } else {
//       return "no such person";
//     }
//   }
//   console.log(getNameOfDriverWithoutDL(facebookProfiles));

//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh
// function getPersonWithoutDLWhoLikesDriving(facebookProfiles) {
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       const profile = facebookProfiles[i];
//       if (profile.likes && profile.likes.includes("driving") && !profile.hasDrivingLicense) {
//         return `${profile.firstName} ${profile.lastName}`;
//       }
//     }
//     return "no such person";
//   }
// console.log(getPersonWithoutDLWhoLikesDriving(facebookProfiles)); 

  
  
  
  
  

