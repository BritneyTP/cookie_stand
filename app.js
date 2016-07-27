'use strict';

var globalHours = ['6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var storeListArray = [];
function store(location, min, max, ave){
  this.locationName = location;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookieNumber = ave;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
  this.stringsForDisplayInLists = [];

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
  };
} ;

var firstAndPike = new store('firstAndPike', 23, 65, 6.3);
firstAndPike.calcCustEachHour();
firstAndPike.calcCookiesEachHour();
firstAndPike.render();

var seaTacAirport = new store('seaTacAirport', 3, 24, 1.2);
seaTacAirport.calcCustEachHour();
seaTacAirport.calcCookiesEachHour();
seaTacAirport.render();

var seattleCenter = new store('seattleCenter', 11, 38, 3.7);
seattleCenter.calcCustEachHour();
seattleCenter.calcCookiesEachHour();
seattleCenter.render();

var capitalHill = new store('capitalHill', 11, 38, 3.7);
capitalHill.calcCustEachHour();
capitalHill.calcCookiesEachHour();
capitalHill.render();

var alki = new store('alki', 11, 38, 3.7);
alki.calcCustEachHour();
alki.calcCookiesEachHour();
alki.render();
