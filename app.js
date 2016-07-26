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

firstAndPike.calcCustEachHour = function (){
  // This method will generate a random number of customer for each hour and push
  //  them into the array.
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    //console.log(this.maxCustPerHour);
    this.custEachHourArray.push(singleHourCust);
  }
};
firstAndPike.calcCustEachHour();

firstAndPike.calcCookiesEachHour = function(){
  //This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
//  and generate an array of hourly cookie sales
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
    var totalCookie = totalCookie + singleHourCookies;
    console.log(totalCookie);
  }
};
var totalDailyCookieSales

firstAndPike.calcCookiesEachHour();

firstAndPike.render = function(){
// This method will take the array of hourly cookie sales and display the data as an unordered list
//   this.calcCookiesEachHour();
var pikeList = document.getElementById('PikeId');
for (var i = 0; i < hours.length; i++) {
  var listElement = document.createElement('li');
  totalElement.textContent = hours[i] + 'i' + this.cookiesEachHourArray[i] + 'cookies';
  pikeList.appendChild(totalElement);
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

  seaTacAir.calcCookiesEachHour = function(){
    //This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
  //  and generate an array of hourly cookie sales
    for (var i = 0; i < globalHours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
      var totalCookie = totalCookie + singleHourCookies;
      console.log(totalCookie);
    }
  };
  var totalDailyCookieSales

  seaTacAir.calcCookiesEachHour();

  seaTacAir.render = function(){
  // This method will take the array of hourly cookie sales and display the data as an unordered list
  //   this.calcCookiesEachHour();
  var pikeList = document.getElementById('');
  for (var i = 0; i < hours.length; i++) {
    var listElement = document.createElement('li');
    totalElement.textContent = hours[i] + 'i' + this.cookiesEachHourArray[i] + 'cookies';
    airList.appendChild(totalElement);
  };
  seaTacAir.render();

//Store 3

  var seaCenter = {
    var seaCenter = {
      locationName: 'Seattle Center',
      minCustPerHour: 3,
      maxCustPerHour: 24,
      avgCookieNumber: 1.2,
      custEachHourArray: [],
      cookiesEachHourArray: [],
      totalDailyCookieSales: 0
    };

    seaCenter.calcCustEachHour = function (){
      // This method will generate a random number of customer for each hour and push
      //  them into the array.
      for (var i = 0; i < globalHours.length; i++) {
        var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
        //console.log(this.maxCustPerHour);
        this.custEachHourArray.push(singleHourCust);
      }
    };
    seaCenter.calcCustEachHour();

    seaCenter.calcCookiesEachHour = function(){
      //This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
    //  and generate an array of hourly cookie sales
      for (var i = 0; i < globalHours.length; i++) {
        var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
        this.cookiesEachHourArray.push(singleHourCookies);
        this.totalDailyCookieSales += singleHourCookies;
        var totalCookie = totalCookie + singleHourCookies;
        console.log(totalCookie);
      }
    };
    var totalDailyCookieSales

    seaCenter.calcCookiesEachHour();

    seaCenter.render = function(){
    // This method will take the array of hourly cookie sales and display the data as an unordered list
    //   this.calcCookiesEachHour();
    var pikeList = document.getElementById('Seattle Center');
    for (var i = 0; i < hours.length; i++) {
      var listElement = document.createElement('li');
      totalElement.textContent = hours[i] + 'i' + this.cookiesEachHourArray[i] + 'cookies';
      airList.appendChild(totalElement);
    };
    seaCenter.render();


//Store 4

      var Cap = {
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

      seaTacAir.calcCookiesEachHour = function(){
        //This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
      //  and generate an array of hourly cookie sales
        for (var i = 0; i < globalHours.length; i++) {
          var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
          this.cookiesEachHourArray.push(singleHourCookies);
          this.totalDailyCookieSales += singleHourCookies;
          var totalCookie = totalCookie + singleHourCookies;
          console.log(totalCookie);
        }
      };
      var totalDailyCookieSales

      seaTacAir.calcCookiesEachHour();

      seaTacAir.render = function(){
      // This method will take the array of hourly cookie sales and display the data as an unordered list
      //   this.calcCookiesEachHour();
      var pikeList = document.getElementById('');
      for (var i = 0; i < hours.length; i++) {
        var listElement = document.createElement('li');
        totalElement.textContent = hours[i] + 'i' + this.cookiesEachHourArray[i] + 'cookies';
        airList.appendChild(totalElement);
      };
      seaTacAir.render();

//Store 5
      var seaTacAir = {
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

        seaTacAir.calcCookiesEachHour = function(){
          //This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
        //  and generate an array of hourly cookie sales
          for (var i = 0; i < globalHours.length; i++) {
            var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
            this.cookiesEachHourArray.push(singleHourCookies);
            this.totalDailyCookieSales += singleHourCookies;
            var totalCookie = totalCookie + singleHourCookies;
            console.log(totalCookie);
          }
        };
        var totalDailyCookieSales

        seaTacAir.calcCookiesEachHour();

        seaTacAir.render = function(){
        // This method will take the array of hourly cookie sales and display the data as an unordered list
        //   this.calcCookiesEachHour();
        var pikeList = document.getElementById('');
        for (var i = 0; i < hours.length; i++) {
          var listElement = document.createElement('li');
          totalElement.textContent = hours[i] + 'i' + this.cookiesEachHourArray[i] + 'cookies';
          airList.appendChild(totalElement);
        };
        seaTacAir.render();
};
