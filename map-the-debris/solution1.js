function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];
  
    const getOrbPeriod = function(obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

//   Code Explanation
// GM and earthRadius are both given to us.
// To make the code easier to edit and read, each part of the equation is written separately.
// Create newArr to store the orbPeriod's.
// a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
// Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
// c is (earthRadius + avgAlt) to the cube.
// b is the square root of c divided by GM.
// Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
// Then we delete the key avgAlt, and add the new key and its value.