// Testing javascript link through web console

console.log('testing');

// Assign variable

var firstName = 'Sarah';
console.log(firstName);

firstName = 'Christian';

// Find out types

console.log(typeof firstName);

console.log(`Hi my name is ${firstName}`)

// array is a python list
var students = ['tommy', 'michael', 'sabita']
console.log(students)

// objects are python dicts
var bio = {
    firstName: 'christian',
    lastName: 'sachs',
    location: 'NM'
}

// Hoisting
console.log(tezNumber)
var tezNumber = 7;
console.log(tezNumber)

// let prevents hoisting behavior
let favSuperHero = 'Spiderman'
console.log(favSuperHero)
favSuperHero = 'Mary'
console.log(favSuperHero)

// const

const birthday = 'June 25th'
console.log(birthday)

// math operations

let num = 0

console.log(num+=2);
console.log(num++)
console.log(++num)

// math is built in in JS

console.log(Math.floor(3.14))
console.log(Math.ceil(3.14))

// int + str == str

// function declaration
// function goatPlayer(name) {
//     return name
// }

// goatPlayer('MJ')

// function expression

// const goatPlayer = function(name){
//     return name
// }

// console.log(goatPlayer('kobe bryant'))

// arrow function

const goatPlayer = (name) => {
    return name
}

const newFunct = (name) => name

console.log(goatPlayer('lebron james'))

// if else if else
const checkTemp = (temp) => {
    if(temp < 65){
        return 'its cold out'
    }
    else if (temp < 85) {
        return 'its beautiful out'
    }
    else {
        return 'its pretty steamy outside'
    }
}

console.log(checkTemp(100))

// ternary operators

let grade = 95
console.log(grade > 80 ? 'pass' : 'Fail') 

// js loops

let movies = ['Civil War', 'Barbie', 'Scott Pilgrim']

// loop through array

for (let i=0; i < movies.length; i++) {
    console.log(movies[i])
}

// loop with for of

for (let movie of movies){
    console.log(movie)
}

// loop through an array with for in
for (let idx in movies){
    console.log(movies[idx])
}
parseInt('7')

// while loop

let whileNum = 0
while(whileNum < 10){
    console.log(whileNum);
    whileNum++;
}

// do-while (guaranteed to run at least once)

do {
    console.log(whileNum)
    whileNum++
} while (whileNum < 10)

// indexes
artists = [1,2,3,4,5]
console.log(artists[artists.length-1])

console.log(tezNumber.toString())
// also works on arrays

// joining
console.log(artists.join(''))

// slicing (not affect original) and splicing (affects original)
console.log(artists.slice(0,2))
console.log(artists.splice(2))
