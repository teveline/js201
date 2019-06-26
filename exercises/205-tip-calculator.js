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
function tipAmount (billAmount, service) {
    if (service == 'good') {
        return billAmount * 0.20;
    } else if (service == 'fair') {
        return billAmount * .15;
    } else if (service == 'poor') {
        return billAmount * 0.10;
        }
    }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46
function totalAmount (billAmount, service) {
    if (service == 'good') {
        return billAmount + (billAmount * .2)
    } 
    else if (service == 'fair') {
        return billAmount + (billAmount * .15)
    } 
    else if (service == 'poor') {
        return billAmount + (billAmount * .1)
    }
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
function splitAmount (billAmount, service, numOfPeople) {
    if (service == 'good') {
        return (billAmount + (billAmount * .2)) / numOfPeople
    } else if (service == 'fair') {
        return (billAmount + (billAmount * .15)) / numOfPeople
    } else if (service == 'poor') {
        return (billAmount + (billAmount * .1)) / numOfPeople
    }
}