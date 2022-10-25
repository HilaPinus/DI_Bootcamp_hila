



let numberOfBeers = +prompt("how many beers?");
let umberOfBeersToTakeAway = 1;

while (numberOfBeers > 0) {
const stanza = makeStanza(numberOfBeers, umberOfBeersToTakeAway);
console.log(stanza);
numberOfBeers = numberOfBeers-umberOfBeersToTakeAway;
umberOfBeersToTakeAway = umberOfBeersToTakeAway +1;
}

function makeStanza(num, counter) {
const ButtelOrButtels = getButtelOrButtels(num);
const stanza = `${num} ${ButtelOrButtels} of beer on the wall
${num} ${ButtelOrButtels} of beer
Take ${counter} down, pass it around
${num - counter} ${getButtelOrButtels(num-counter)} of beer on the wall`;
return stanza;
}    

function isPlural(num) {
    if (num>1) {
    return true
} else {
    return false
}
}

function getButtelOrButtels(num) {
    if (isPlural(num)) {
        return "buttles"
    } else {
        return "buttle";
    }
}
    
