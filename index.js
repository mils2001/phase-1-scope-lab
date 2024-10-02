// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
};

function setBestCustomer() {
  bestCustomer = 'not bob';
};

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
};

const leastFavoriteCustomer = 'john'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'unsuccessfully tries to reassign the least favourite customer ';
};
