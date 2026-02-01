const age = 20;

// if (age >= 18){
//     console.log("you can vot")
// }
// else {
//     console.log('basye jaia gumaoo')
// }

// const getAge = age >= 18 ? console.log('vote dio') : console.log('gumaia thako')


let price = 500;
const isLeader = false;

// if (isLeader === true) {
//     price = 0;
// }
// else {
//     price += 100;
// }

// console.log(price)


// price = isLeader === true ? 0 : price + 100;

// console.log(price)

// if (isLeader === true) {
//     if (price >1000) {
//         price /= 2;
//     }
//     else {
//         price = 0;
//     }
// }

// else { 
//     price += 1000;
// }


price = isLeader === true ? price > 1000 ? price = price / 2 : price = 0 : price + 1000;

console.log(price)