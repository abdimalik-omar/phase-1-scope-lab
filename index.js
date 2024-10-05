// Task 1: Declare global variable customerName
var customerName = 'bob';

// Task 2: Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Task 3: Function to set global bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declared globally because no var, let, or const is used
}

// Task 4: Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Overwriting global variable bestCustomer
}

// Task 5: Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'somebody';

// Task 5 (cont'd): Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'anybody else'; // This will throw an error
}

