"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(Magicians) {
    for (const magician of Magicians) {
        console.log(magician);
        console.log(magician + " " + "The Great");
    }
}
const magicianNames = ["Penn Jillette", "Criss Angel", "Teller"];
show_magicians(magicianNames);
