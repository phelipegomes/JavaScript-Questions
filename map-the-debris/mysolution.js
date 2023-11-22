function orbitalPeriod(arr) {
    const myArr = [...arr]
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    function getResult(avgAlt) {
      return Math.round(2 * Math.PI * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM))
    }
  
    return myArr.map(obj => {
      Object.defineProperty(
        obj,
        'orbitalPeriod',
        Object.getOwnPropertyDescriptor(
          obj, 
          'avgAlt'
        ),
      );
      obj.orbitalPeriod = getResult(obj.avgAlt)
      delete obj["avgAlt"]
      return obj
    });
  }
  
  console.log(
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}, {name : "sputnik", avgAlt : 35873.5553}])  
  );