"use strict";
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// typescript
// Define the list of users
let usernames = [];
// check if the list of users is not empty
if (usernames.length === 0) {
    console.log("we need to find some users!");
}
else {
    // if the list is not empty, remove all usernames
    usernames = [];
    console.log("All usernames have been removed.");
}
