function smallestCommons(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let mmc = max;
  
    while (true) {
      let isCommonMultiple = true;
      for (let i = min; i <= max; i++) {
        if (mmc % i !== 0) {
          isCommonMultiple = false;
          break;
        }
      }
      if (isCommonMultiple) {
        return mmc;
      }
      mmc += max;
    }
  }
  
smallestCommons([1, 5]);