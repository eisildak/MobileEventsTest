const jsonData = require('./eventData');

function filterObjectsByProperties(jsonArray, filterCriteria) {
  return jsonArray.filter(obj => {
    for (const property in filterCriteria) {
      if (property === "params" && typeof filterCriteria[property] === "object") {
        const params = filterCriteria[property];
        for (const paramKey in params) {
          if (obj[property] && obj[property][paramKey] !== params[paramKey]) {
            return false;
          }
        }
      } else if (obj[property] !== filterCriteria[property]) {
        return false;
      }
    }
    return true;
  });
}

const filterCriteria = {
  deviceId: 'fb5070b3-22c9-4634-f871-8f0fac267975',
  "params": {
    "duration": 0.0,
  }
};

const filteredData = filterObjectsByProperties(jsonData, filterCriteria);

// Log the filtered data
console.log(filteredData);
console.log(filteredData.length);