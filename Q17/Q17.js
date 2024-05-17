"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestlist = ["Komal", "Ariba", "Junaid", "Obaid"];
// message about inviting only two people.
console.log(`I can invite only two people for Dinner`);
// remove guest from the list until only two name remain
while (guestlist.length > 2) {
    let removeGuest = guestlist.pop();
    console.log(`Sorry, ${removeGuest}, I cant invite you to Dinner`);
}
// two people still on your list, letting them know they're still invited.
for (let guest of guestlist) {
    console.log(`Hello, ${guest}, You are still invited to Dinner`);
}
// print your list to make sure you actually have an empty list at the end of your program.
guestlist.pop();
guestlist.pop();
// print empty string
console.log(`Guest list after Dinner`, guestlist);
