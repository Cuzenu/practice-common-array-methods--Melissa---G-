/*
console.log("Practice");

let animals = [];                        // empty array
animals.push("dog", "cat");              // added dog and cat to end [-, -, dog, cat]
animals.unshift("elephant");             // added elephant to beginnning [elephant, -, -, dog, cat]
let lastRemoved = animals.pop();         // removed last element "cat" [elephant, -, -, dog]
let firstRemoved = animals.shift();      // removed first element "elephant" [-, -, dog]

console.log(animals);                    // view current array
console.log(lastRemoved);               // output "cat"
console.log(firstRemoved);              // output "elephant"

// more practice
let animals = ["dog", "cat", "bird", "cat", "dog"];
console.log(animals.includes("cat"));               // validates cat is included in array
console.log(animals.indexOf("cat"));               // indicates the first position of the word "cat"
console.log(animals.lastIndexOf("cat"));           // indicates the last position of the word "cat"

// more practice 
let morningTasks = ["wake up", "brush teeth"]
let eveningTasks = ["dinner", "sleep"]

let dailyTasks = morningTasks.concat(eveningTasks);  // combine morningTasks with eveningTasks
console.log(dailyTasks);

let colors = ["red", "blue", "green", "yellow"];
// let middleColors = colors.slice(1, 3); // extract blue and green output in new array but do not modify orginal array
let middleColors = colors.splice(1, 2);  // extract blue and green and remove from orginal array
console.log(colors);
console.log(middleColors);


// sorting practice
let coolCities = ["Tokyo", "New York", "London", "Paris"]
coolCities.sort();             // Sort a-z
console.log(coolCities);

coolCities.reverse();         // Reverse sort z-a
console.log(coolCities);

let coldTemperature = [30, 25, 20, 15, 10]
coldTemperature.sort((a, b) => a-b);  // Sort ascesding order

console.log(coldTemperature);
*/

/*
Practice: Common Array Methods and Length

You are working as a developer for a local café that needs a system to track customer orders.
The café serves drinks and pastries, and orders are stored in a 2D array, where each row represents
a category (drinks or pastries), and each column represents an order within that category.
Your task is to use the .length property to track the number of items in the café’s order system dynamically.

Task 1: Create the Order System
Create a multi-dimensional array called orders with two rows:
    ● The first row stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
    ● The second row stores three pastry orders (e.g., “Croissant”, “Muffin”, “Bagel”).

Task 2: Log the number of drinks and number of pastries by using .length on each row.

Task 3: Access Orders Using Bracket Notation
Use bracket notation to log a specific drink and a specific pastry using hardcoded numbers.
For example, you might want to log the first drink and last pastry. Do this for three combinations.

Task 4: Access Orders Dynamically with Variables
Declare two variables and use them with bracket notation to log the selected order dynamically

Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
dynamically adjusts to the number of items using .length.

Task 6: Add a New Order & Track Length
Suppose a new order has been placed: a customer ordered a flat white. Add “flat white” to the 
drinks category dynamically. Log the updated number of drinks after the addition.
Declare two variables and use them with bracket notation to log the selected order dynamically.
*/ 

// Task 1: Create the Order System
let orders = [
    ["Latte", "Tea", "Espresso"],        // Drinks
    ["Croissant", "Muffin", "Bagel"],    // Pastries 
]

console.log(orders);         // validate array output

// Task 2: Log the number of drinks and number of pastries by using .length on each row
let numberOfDrinks = orders[0].length;      
let numberOfPastries = orders[1].length;    

console.log("Number of drinks: " + numberOfDrinks);
console.log("Number of pastries: " + numberOfPastries);


//Task 3: Access Orders Using Bracket Notation
console.log("First drink: " + orders[0][0]);   // Latte
console.log("First pastry: " + orders[0][0]);   // Croissant

console.log("Second pastry: " + orders[0][1]);  // Muffin
console.log("Second drink: " + orders[0][1]);  // Tea

console.log("Third drink: " + orders[0][2]);   // Espresso
console.log("Third pastry: " + orders[0][2]);   // Bagel


// Task 4: Access Orders Dynamically with Variables
let drinkIndex = 0;     
let pastryIndex = 2;   

console.log("Selected drink: " + orders[0][drinkIndex]);   // Latte
console.log("Selected pastry: " + orders[1][pastryIndex]);   // Bagel

// Task 5: Write a loop that logs all the items in the drink category

console.log("Drinks:");
for (let i = 0; i < orders[0].length; i++) {     // loops through order drinks to list all items
    console.log(orders[0][i]);
}

// Task 6: Add a New Order & Track Length
orders[0].push("Flat white");
console.log(orders);

numberOfDrinks = orders[0].length;
console.log("Number of drinks : " + numberOfDrinks);