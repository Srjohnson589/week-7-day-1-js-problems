//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// I'm taking it as if case doesn't matter....
function findWords(sentence, names){
    sentence = sentence.toLowerCase();
    search_arr = sentence.split(' ');
    for (i=0; i < search_arr.length;i++) {
        search_arr[i] = search_arr[i].replace(/[.,!]/g,'');
    }
    for (name of names) {
        if (search_arr.includes(name.toLowerCase())) {
            console.log(`Matched ${name.toLowerCase()}`);
        }
        else {
            console.log("No Match");
        }
    }
}

//Call method here with parameters
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let myarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (i=0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index')
        }
    }
    return arr;
}
console.log(replaceEvens(myarr))
// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewars
// 1. Stop gninnipS My sdroW!

function spinWords(string){
    string = string.split(' ')
    for (i=0; i < string.length; i++) {
      if (string[i].length > 4){
        string[i] = string[i].split("").reverse().join("");
      }
    }
    return string.join(' ');
  }

//   2. Multiples of 3 or 5

function solution(number){
    if (number < 0){
     return 0;
    }
    let sum = 0;
    let multiple = 3;
    while (multiple < number){
      sum += multiple;
      multiple += 3;
    }
    multiple = 5;
    while (multiple < number){
      if (!(multiple%3 == 0)){
        sum += multiple;
      }
      multiple += 5;
    }
    return sum;
}

