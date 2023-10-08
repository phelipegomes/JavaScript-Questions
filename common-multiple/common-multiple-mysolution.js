function smallestCommons(arr) {
  const [min, max] = arr.sort((a,b) => a - b);
  let needStop = false;
  let mmc = max;
  
  while(!needStop) {
    let count = 0;
    mmc += max;
    for(let i = min; i <= max; i++) { 
      if(mmc % i === 0) {
        count++;
      }
      if(count === max - min + 1) { 
        needStop = true;
        return mmc;
      }
    }
    if(needStop) {
      break
    }  
  }
  
  return 0;
}

smallestCommons([1, 5]); 
