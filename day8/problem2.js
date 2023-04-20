
const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];
/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true*/

// function findCard(value, suit) {
//     // Using the some() method to check if a card with given value and suit is present in the cardData array
//     const isCardPresent = cardData.some(card => card.value === value && card.suit === suit);
//     return isCardPresent;
//   }
  
//   console.log(findCard(5, 'heart')); // false
//   console.log(findCard(10, 'club')); // true



/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/
// function getSuits(cardData) {
//     // Using the Set object to get unique suits from the cardData array
//     const suits = new Set(cardData.map(card => card.suit));
    
//     return Array.from(suits);
//   }
  
//   console.log(getSuits(cardData)); // ["heart", "club", "diamond"]


/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/
// function getSuitCount(cardData) {
//     const suitCount = {};
  
//     // Loop through each card in the cardData array
//     for (let card of cardData) {
//       // If the suit has not been counted yet, initialize its count to 1
//       if (!suitCount[card.suit]) {
//         suitCount[card.suit] = 1;
//       } 
//       // Otherwise, increment the suit's count
//       else {
//         suitCount[card.suit]++;
//       }
//     }
  
//     return suitCount;
//   }
  
//   console.log(getSuitCount(cardData));



/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]}**/

// function getSuitValues(cardData) {
//     const suits = {}
//     for (let card of cardData) {
//       if (card.suit in suits) {
//         suits[card.suit].push(card.value)
//       } else {
//         suits[card.suit] = [card.value]
//       }
//     }
//     return suits
//   }

//   console.log(getSuitValues(cardData));