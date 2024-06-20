// Array of gifts
const gifts = ["teddy bear", "drone", "doll"];

// Function to wrap gifts using a for loop
function wrapGiftsForLoop(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

// Function to wrap gifts using a while loop
function wrapGiftsWhileLoop(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

// Function to write thank you cards
function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

// Function to count down from a given number to zero
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example usage
console.log("Using for loop to wrap gifts:");
wrapGiftsForLoop(gifts);

console.log("\nUsing while loop to wrap gifts:");
wrapGiftsWhileLoop(gifts);

// Names of gift receivers and the event name
const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";

console.log("\nThank you cards:");
console.log(writeCards(names, event));

console.log("\nCountdown from 10:");
countDown(10);  // Example countdown from 10
