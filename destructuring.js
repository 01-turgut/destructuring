/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0]
// let maria = ages[1]
// let harry = ages[2]
let [john, maria, harry] = ages;

console.log(john, maria, harry)
// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia)
// Destructuring subsets
let languages = ['english', 'french', 'spanish'
, 'german', 'japanese']
let [johnNative, johnSecondary] = languages;
let [, , mariaNative, mariaSecondary] = languages;
console.log(johnNative, johnSecondary)
console.log(mariaNative, mariaSecondary)

let languages2 = {
    firstLanguage: 'english',
    seconfLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage)
// Using rest parameter syntax
let fruits = ['apple', 'grape', 'melon', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite)
console.log(secondFavorite)
console.log(others)

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegeterian',
    andrea: 'steak'
};
let {brian, anna, ...rest} = favoriteFoods;

console.log(brian)
console.log(anna)
console.log(rest)