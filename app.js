'use strict';

var globalHours = ['6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

// Store 1
var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieNumber: 6.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};

// This method will generate a random number of customer for each hour and push
//  them into the array.
firstAndPike.calcCustEachHour = function (){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    //console.log(this.maxCustPerHour);
    this.custEachHourArray.push(singleHourCust);
  }
};
firstAndPike.calcCustEachHour();

//This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
//  and generate an array of hourly cookie sales
firstAndPike.calcCookiesEachHour = function(){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
    var totalCookie = totalCookie + singleHourCookies;
    console.log(totalCookie);
  }
};
//
firstAndPike.calcCookiesEachHour();

// This method will take the array of hourly cookie sales and display the data as an unordered list
//   this.calcCookiesEachHour();
firstAndPike.render = function(){
  var pikeList = document.getElementById('firstAndPike');
  for (var i = 0; i < globalHours.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = globalHours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    pikeList.appendChild(listElement);
  };
};
firstAndPike.render();


// Store 2

var seaTacAir = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieNumber: 1.2,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};

seaTacAir.calcCustEachHour = function (){
  // This method will generate a random number of customer for each hour and push
  //  them into the array.
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    //console.log(this.maxCustPerHour);
    this.custEachHourArray.push(singleHourCust);
  }
};
seaTacAir.calcCustEachHour();

//This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
//  and generate an array of hourly cookie sales
seaTacAir.calcCookiesEachHour = function(){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
    var totalCookie = totalCookie + singleHourCookies;
    console.log(totalCookie);
  }
};

seaTacAir.calcCookiesEachHour();

// This method will take the array of hourly cookie sales and display the data as an unordered list
//   this.calcCookiesEachHour();
seaTacAir.render = function(){
  var airList = document.getElementById('seaTacAirport');
  for (var i = 0; i < globalHours.length; i++) {
    var airListElement = document.createElement('li');
    airListElement.textContent = globalHours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    airList.appendChild(airListElement);
  };
};
seaTacAir.render();

// //Store 3
//
// var seaCenter = {
//   locationName: 'Seattle Center',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookieNumber: 1.2,
//   custEachHourArray: [],
//   cookiesEachHourArray: [],
//   totalDailyCookieSales: 0
// };
//
// // This method will generate a random number of customer for each hour and push
// //  them into the array.
// seaCenter.calcCustEachHour = function (){
//   for (var i = 0; i < globalHours.length; i++) {
//     var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
//     //console.log(this.maxCustPerHour);
//     this.custEachHourArray.push(singleHourCust);
//   }
// };
// // Call function that caluculates the cust per hr
// seaCenter.calcCustEachHour();
//
// seaCenter.calcCookiesEachHour = function(){
//   //This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
// //  and generate an array of hourly cookie sales
//   for (var i = 0; i < globalHours.length; i++) {
//     var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
//     this.cookiesEachHourArray.push(singleHourCookies);
//     this.totalDailyCookieSales += singleHourCookies;
//     var totalCookie = totalCookie + singleHourCookies;
//     console.log(totalCookie);
//   }
// };
// seaCenter.calcCookiesEachHour();
//
// seaCenter.render = function(){
// // This method will take the array of hourly cookie sales and display the data as an unordered list
// //   this.calcCookiesEachHour();
// var pikeList = document.getElementById('Seattle Center');
// for (var i = 0; i < hours.length; i++) {
//   var listElement = document.createElement('li');
//   totalElement.textContent = hours[i] + 'i' + this.cookiesEachHourArray[i] + 'cookies';
//   airList.appendChild(totalElement);
// };
// seaCenter.render();
//
//
// //Store 4
//
// var capitalHill = {
//   locationName: 'Capital Hill',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookieNumber: 1.2,
//   custEachHourArray: [],
//   cookiesEachHourArray: [],
//   totalDailyCookieSales: 0
// };
//
// capitalHill.calcCustEachHour = function (){
//   // This method will generate a random number of customer for each hour and push
//   //  them into the array.
//   for (var i = 0; i < globalHours.length; i++) {
//     var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
//     //console.log(this.maxCustPerHour);
//     this.custEachHourArray.push(singleHourCust);
//   }
// };
// capitalHill.calcCustEachHour();
//
// capitalHill.calcCookiesEachHour = function(){
//   //This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
// //  and generate an array of hourly cookie sales
//   for (var i = 0; i < globalHours.length; i++) {
//     var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
//     this.cookiesEachHourArray.push(singleHourCookies);
//     this.totalDailyCookieSales += singleHourCookies;
//     var totalCookie = totalCookie + singleHourCookies;
//     console.log(totalCookie);
//   }
// };
//
//
// capitalHill.calcCookiesEachHour();
//
// capitalHill.render = function(){
// // This method will take the array of hourly cookie sales and display the data as an unordered list
// //   this.calcCookiesEachHour();
// var pikeList = document.getElementById('capitalHill');
// for (var i = 0; i < hours.length; i++) {
//   var listElement = document.createElement('li');
//   totalElement.textContent = hours[i] + 'i' + this.cookiesEachHourArray[i] + 'cookies';
//   airList.appendChild(totalElement);
// };
// capitalHill.render();
//
// //Store 5
// var alki = {
//   locationName: 'Alki',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookieNumber: 1.2,
//   custEachHourArray: [],
//   cookiesEachHourArray: [],
//   totalDailyCookieSales: 0
// };
//
// // This method will generate a random number of customer for each hour and push
// //  them into the array.
// alki.calcCustEachHour = function (){
//   for (var i = 0; i < globalHours.length; i++) {
//     var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
//     //console.log(this.maxCustPerHour);
//     this.custEachHourArray.push(singleHourCust);
//   }
// };
// alki.calcCustEachHour();
//
// //This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
// //  and generate an array of hourly cookie sales
// alki.calcCookiesEachHour = function(){
//   for (var i = 0; i < globalHours.length; i++) {
//     var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
//     this.cookiesEachHourArray.push(singleHourCookies);
//     this.totalDailyCookieSales += singleHourCookies;
//     var totalCookie = totalCookie + singleHourCookies;
//     console.log(totalCookie);
//   }
// };
// alki.calcCookiesEachHour();
//
// // This method will take the array of hourly cookie sales and display the data as an unordered list
// //   this.calcCookiesEachHour();
// alki.render = function(){
// var pikeList = document.getElementById('alki');
// for (var i = 0; i < hours.length; i++) {
//   var listElement = document.createElement('li');
//   totalElement.textContent = hours[i] + 'i' + this.cookiesEachHourArray[i] + 'cookies';
//   airList.appendChild(totalElement);
// };
// alki.render();
