// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

//These tests can be solved with multiple solutions.

//Soluton 1: might not be the best if there were 20,000 service types. It would take a lot of work to change. (My solution)
function tipAmount (billAmount, service) {
    if (service == 'good') {
        return billAmount * 0.20;
    } else if (service == 'fair') {
        return billAmount * .15;
    } else if (service == 'poor') {
        return billAmount * 0.10;
        }
    }

//Solution 2: This is probably the best solution, becase it would be easier to change, increase or decrease, etc.
// --> If the data is dynamic (changes) you want to be able to do this easily. 
// function tipAmountWithObject (billAmount, service) {
//     var serviceType = {
//         good: 0.2,
//         fair: 0.15,
//         poor: 0.1
//     }
// }
// let tip = amount * (serviceType[service])

// ^^^^ Somethings wrong with the one you did above ^^^

// //Solution 3: 
// function tipAmountWithSwitch (amount, level) {
//     switch (level) {
//         case 'good':
//             return amount * .2
//         case 'fair':
//             return amount .15
//         case 'poor':
//             return amount .1
//     }
// }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

//Solution 1: This was my original solution
// function totalAmount (billAmount, service) {
//     if (service == 'good') {
//         return billAmount + (billAmount * .2)
//     } 
//     else if (service == 'fair') {
//         return billAmount + (billAmount * .15)
//     } 
//     else if (service == 'poor') {
//         return billAmount + (billAmount * .1)
//     }
// }

// Solution 2
// function totalAmount(billAmount, service) {
//     return billAmount + tipAmount(billAmount, service)
// }
//This will use the function you already wrote above it, this is what you were trying to figure out.

//Solution 3
function totalAmount(billAmount, service) {
    var amountToTotal = {
        good: 1.2,
        fair: 1.15,
        poor: 1.1
    }
    return billAmount * amountToTotal[service]
}


// 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

//Solution 1
// function splitAmount (billAmount, service, numOfPeople) {
//     if (service == 'good') {
//         return (billAmount + (billAmount * .2)) / numOfPeople
//     } else if (service == 'fair') {
//         return (billAmount + (billAmount * .15)) / numOfPeople
//     } else if (service == 'poor') {
//         return (billAmount + (billAmount * .1)) / numOfPeople
//     }
// }

function splitAmount (billAmount, service, numOfPeople) {
    return totalAmount(billAmount, service) / numOfPeople
}
//When you used totalAmount it initially didn't work because you didn't also attach the arguments that totalAmount
// takes (billAmount, service)