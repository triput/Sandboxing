/*
Login Validation
*/

// Login information
let username = "student123";
let password = "learn2024";
// Add your login validation code below
// Hint: Check if username AND password match expected values
// Your code here:
// Display appropriate message
if (username == "student123" && password == "learn2024") {
    console.log("Login successful! Welcome,", username, "!");
} else {
    console.log("Login failed! Please check your username and password.");
}

/*
Shipping Calculator
*/
// Order information
let orderTotal = 45;
let destination = "domestic";
// Calculate shipping cost
// Hint: Different rates for different order totals and destinations
// Use else if to handle multiple conditions
// Your code here:
// Display final cost
// Remember to show both order total and shipping cost
let shippingCost = 0;
if (destination === "domestic") {
    if ((orderTotal <= 50) && (orderTotal >= 25)) {
        shippingCost = 5;
    } else if (orderTotal < 25) {
        shippingCost = 10;
    } else {
        shippingCost = 0;
    }
} else if (destination === "international") {
    if ((orderTotal <= 100) && (orderTotal >= 50)) {
        shippingCost = 15;
    } else if (orderTotal < 50) {
        shippingCost = 25;
    } else {
        shippingCost = 0;
    }
}
console.log("Order Total: $", orderTotal);
console.log("Shipping Cost: $", shippingCost);
console.log("Final Cost: $", orderTotal + shippingCost);

/*
Menu System
*/
// Menu selection
let choice = "burger";

// Create menu system using switch
// Hint: Different responses for different menu items
// Your code here:
// Display order confirmation
switch (choice) {
    case "burger":
        console.log("Burger.....$10");
        console.log("Preparation time: 15 minutes");
        console.log("Ingredients: Bun, Patty, Lettuce, Tomato, Cheese");
        break;
    case "pizza":
        console.log("Pizza-----$12");
        console.log("Preparation time: 20 minutes");
        console.log("Ingredients: Dough, Sauce, Cheese, Toppings");
        break;
    case "salad":
        console.log("Salad-----$8");
        console.log("Preparation time: 10 minutes");
        console.log("Ingredients: Lettuce, Tomato, Cucumber, Dressing");
        break;
    default:
        console.log("Invalid menu item selected.");
}   