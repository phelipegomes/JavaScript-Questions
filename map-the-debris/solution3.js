function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    // Create new array to prevent modification of the original
    const newArr = JSON.parse(JSON.stringify(arr));
    // Loop through each item in the array arr
    newArr.forEach(function(item) {
      // Calculate the Orbital period value
      const tmp = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
      );
      //Delete the avgAlt property
      delete item.avgAlt;
      //Add orbitalPeriod property
      item.orbitalPeriod = tmp;
    });
  
    return newArr;
  }


//   GM and earthRadius are both given to us.
// The forEach() method is used to execute the function once per element (item) in arr.
// tmp holds the value of orbital period for each element calculated using the formula.
// The key avgAlt is deleted, and orbital period (tmp) found is assigned to the key orbitalPeriod.