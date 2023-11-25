const jsonData = require('./eventData');
function filterObjectsByProperties(jsonArray, filterCriteria) {
    return jsonArray.filter(obj => {
      for (const property in filterCriteria) {
        if (obj[property] !== filterCriteria[property]) {
          return false;
        }
      }
      return true;
    });
  }

  const filterCriteria = {
    deviceId: 'fb5070b3-22c9-4634-f871-8f0fac267975', 
    // motorolla  
    // redmi 7417efbd-ee73-4a0e-70b5-2de32012d5a9
    // iphone fb5070b3-22c9-4634-f871-8f0fac267975
    //searchTerm: "Toilet",
    //deviceId: '6af4aa6a-8ff3-43b2-462f-1cfffe4521ff', //android
    //action: "wayfinding",
   //actionStatus:"successful",
   // action: "use-sdk",
      //"sessionId": "2a6263a0-ab87-41ca-eb0b-af545f40afcf",
      // //"sessionId": null,
      // actionStatus: 'session-end',
      //timestamp: 1698951025
      // originates: 'search',
      // action: 'map-interaction',
      // action: "map-interaction",
      //sid: 3,
      //
      //bid: null
      // lvl: null,
      //bid: null,
      // configuration: {
      //   phoneModel: "Pixel 6a",
      //   //"phoneModel": "iPhone XS",
      // },
      "params": {
        "duration": 0.0,
        "mobileMapSessionTimeoutInSec": 10.0
    },
    };

const filteredData = filterObjectsByProperties(jsonData, filterCriteria);
//Log the filtered data
console.log(filteredData);
console.log(filteredData.length);
