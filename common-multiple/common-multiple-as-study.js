function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    // GCD of two numbers
    // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    // LCM of two numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
    const lcm = (a, b) => a * b / gcd(a, b);
    // LCM of multiple numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Other
    return range.reduce((multiple, curr) => lcm(multiple, curr));
  }
  
  smallestCommons([1, 5]);