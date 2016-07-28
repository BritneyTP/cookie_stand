'use strict';

var globalHours = ['6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var storeListArray = [];
//var totalNumberHours = [];
var finalGlobalDaily = 0;
var stores = [];
var numberOfStores = 0;

function store(location, min, max, ave){
  this.locationName = location;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookieNumber = ave;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
  this.stringsForDisplayInLists = [];

//functions
  this.calcCustEachHour = function (){

    for (var i = 0; i < globalHours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custEachHourArray.push(singleHourCust);

    }
  };
  this.calcCookiesEachHour = function(){
    for (var i = 0; i < globalHours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
    this.stringsForDisplayInLists.push('Total: ' + this.totalDailyCookieSales);
  };
  this.render = function() {
    var storeRendering = document.getElementById(this.locationName);
    for (var i = 0; i < globalHours.length; i++) {
      var listElement = document.createElement('li');
      listElement.textContent = (globalHours[i] + ': ' + this.cookiesEachHourArray[i] + 'cookies');
      storeRendering.appendChild(listElement);
    }
    numberOfStores++;
  };


//   function calcEachHour() {
//     for (var hour = 0; hour < globalHours.length; hour++) {
//       totalDailyCookieSales += this.cookiesEachHourArray[hours]
//       totalNumberHours.push(sum);
//     }
// //  calculating global daily total
//     for (var store = 0; store < mystore.length; store ++) {
//       finalGlobalDaily += mystore[store].totalCookies;
//     }
//     totalNumber.push(finalGlobalDaily);
//   };
}; //END OF CONSTRUCTOR

// function calcNumberHours() {
//   for (var hour = 0; hour < globalHours.length; hour++) {
//     var sum = this.cookiesEachHourArray[hour] + store[2].cookiesEachHourArray[hour] + store[3].cookiesEachHourArray[hour] + store[4].cookiesEachHourArray[hour] + store[5].cookiesEachHourArray[hour];
//     totalNumberHours.push(sum);
//   }
// //calculating global daily total
//   for (var store = 0; store < mystore.length; store ++) {
//     finalGlobalDaily += mystore[store].totalCookies;
//   }
//   totalNumber.push(finalGlobalDaily);
// }

function makeHeaderRow() {
  var tableRow = document.getElementById('fishTable');
  var thElement = document.createElement('th');
  tableRow.appendChild(thElement);
  for (var i = 0; i < globalHours.length; i++ ) {
    thElement = document.createElement('th');
    thElement.textContent = globalHours[i];
    tableRow.appendChild(thElement);
  };
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total:';
  tableRow.appendChild(thElement);
  tableStore.appendChild(tableRow);
}
//
// function makeAllStoreRows() {
//   for (var store = 0; store < stores.length; store++ ){
//     var tableRow = document.createElement('tr');
//     var tdElement = document.createElement('td');
//     tdElement.textContent = stores[store].name;
//     tableRow.appendChild(tdElement);
//     for (var i = 0; i < globalHours.length; i++) {
//       tdElement = document.createElement('td');
//       tdElement.textContent = stores[store].cookiesEachHourArray[i];
//       tableRow.appendChild(tdElement);
//     }
//     tdElement = document.createElement('td');
//     tdElement.textContent = stores[store].totalCookies;
//     tableRow.appendChild(tdElement);
//     storeTable.appendChild(tableRow);
//   }
// };
//
// function makeTotalsRow() {
//   var tableRow = document.getElementById('tr');
//   var tdElement = document.createElement('td');
//   tdElement.textContent = 'Totals';
//   tableRow.appendChild(tdElement);
//   for (var i = 0; i < totalNumberHours.length; i++) {
//     tdElement = document.createElement('td');
//     tdElement.textContent = totalNumberHours[i];
//     tableRow.appendChild(tdElement);
//   }
//   storeTable.appendChild(tableRow);
// }

//DECLARE STORE, RUN CONSTR
var firstAndPike = new store('firstAndPike', 23, 65, 6.3);
firstAndPike.calcCustEachHour();
firstAndPike.calcCookiesEachHour();
//firstAndPike.render();

// var seaTacAirport = new store('seaTacAirport', 3, 24, 1.2);
// seaTacAirport.calcCustEachHour();
// seaTacAirport.calcCookiesEachHour();
// seaTacAirport.render();
//
// var seattleCenter = new store('seattleCenter', 11, 38, 3.7);
// seattleCenter.calcCustEachHour();
// seattleCenter.calcCookiesEachHour();
// seattleCenter.render();
//
// var capitalHill = new store('capitalHill', 20, 38, 2.3);
// capitalHill.calcCustEachHour();
// capitalHill.calcCookiesEachHour();
// capitalHill.render();
//
// var alki = new store('alki', 2, 16, 4.6);
// alki.calcCustEachHour();
// alki.calcCookiesEachHour();
// alki.render();

// //MAKE TABLE AND GIVE IT ROWS
// var table = document.createElement('table');
// table.id = 'fishTable';
// for (var i = 0; i < numberOfStores; i++){
//   var tr = document.createElement('tr');
//   tr.id = 'tr' + i;
//   table.appendChild(tr);
// }
// document.body.appendChild(table);
//
// //calcNumberHours();
// makeHeaderRow();
// // makeAllStoreRows();
// // makeTotalsRow();
