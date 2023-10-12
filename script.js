/* step 1: prompt user to enter an array of flavor
step 2: split user input string into an array of strings
step 3: loop thru array of flavors
step 4: create an object to keep count of how many of each flavor 
there is
step 5: test your porgram to insure it correctly counts the number
of each flavor  
*/ 

// Prompt the user for a list of integers seperated by commas.
const inputFlavors = prompt(
    "Enter a list of comma-seperated froyo flavors",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of flavors into an array of strings.
const array = inputFlavors.split(",");

// // Convert the array of strings into an array of flavors.
const flavors = [];
for (let i = 0; i < array.length; i++) {
    const flavor = array[i];
    flavors.push(flavor)
}

// Count the number of each flavor.
const count = {};
for (let ele of flavors) {
    if (count[ele]) {
        count[ele] += 1;
    } else {
        count[ele] = 1;
    }
}
console.log(count);




